import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { client, urlFor } from '../sanity/client';
import type { Property } from '../types/property';
import { Bed, Bath, Maximize, MapPin, ArrowLeft } from 'lucide-react';

export default function PropertyDetails() {
  const { slug } = useParams();
  const [property, setProperty] = useState<Property | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    client
      .fetch(`*[_type == "property" && slug.current == $slug][0]`, { slug })
      .then((data) => {
        setProperty(data);
        setLoading(false);
      })
      .catch(console.error);
  }, [slug]);

  if (loading) return <div>Carregando...</div>;
  if (!property) return <div>Imóvel não encontrado. <Link to="/">Voltar</Link></div>;

  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', padding: '20px' }}>
      <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '5px', marginBottom: '20px', textDecoration: 'none', color: '#007bff' }}>
        <ArrowLeft size={20} /> Voltar para a lista
      </Link>

      {property.mainImage && (
        <img 
          src={urlFor(property.mainImage).width(800).url()} 
          alt={property.title}
          style={{ width: '100%', borderRadius: '8px', marginBottom: '20px' }}
        />
      )}

      <h1>{property.title}</h1>
      <p style={{ fontSize: '24px', fontWeight: 'bold', color: '#2c3e50' }}>
        R$ {property.price.toLocaleString('pt-BR')} ({property.type})
      </p>

      <div style={{ display: 'flex', gap: '20px', margin: '20px 0', padding: '15px', backgroundColor: '#f8f9fa', borderRadius: '8px' }}>
        <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><Bed /> {property.bedrooms} Quartos</span>
        <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><Bath /> {property.bathrooms} Banheiros</span>
        <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><Maximize /> {property.area}m²</span>
      </div>

      <div style={{ marginBottom: '20px' }}>
        <h3 style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><MapPin size={20} /> Localização</h3>
        <p>{property.address}</p>
      </div>

      <div>
        <h3>Descrição</h3>
        <p style={{ lineHeight: '1.6' }}>{property.description}</p>
      </div>
    </div>
  );
}
