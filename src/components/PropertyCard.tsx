import type { Property } from '../types/property';
import { urlFor } from '../sanity/client';
import { Link } from 'react-router-dom';
import { Bed, Bath, Maximize } from 'lucide-react';

interface Props {
  property: Property;
}

export default function PropertyCard({ property }: Props) {
  return (
    <div style={{ border: '1px solid #ccc', borderRadius: '8px', overflow: 'hidden', marginBottom: '20px' }}>
      {property.mainImage && (
        <img 
          src={urlFor(property.mainImage).width(400).url()} 
          alt={property.title}
          style={{ width: '100%', height: '200px', objectFit: 'cover' }}
        />
      )}
      <div style={{ padding: '15px' }}>
        <span style={{ backgroundColor: '#eee', padding: '2px 8px', borderRadius: '4px', fontSize: '12px' }}>
          {property.type.toUpperCase()}
        </span>
        <h3>{property.title}</h3>
        <p style={{ fontWeight: 'bold', color: '#2c3e50' }}>
          R$ {property.price.toLocaleString('pt-BR')}
        </p>
        <div style={{ display: 'flex', gap: '15px', fontSize: '14px', color: '#666' }}>
          <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
            <Bed size={16} /> {property.bedrooms}
          </span>
          <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
            <Bath size={16} /> {property.bathrooms}
          </span>
          <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
            <Maximize size={16} /> {property.area}m²
          </span>
        </div>
        <Link 
          to={`/imovel/${property.slug.current}`}
          style={{ display: 'block', marginTop: '15px', textAlign: 'center', padding: '10px', backgroundColor: '#007bff', color: 'white', textDecoration: 'none', borderRadius: '4px' }}
        >
          Ver Detalhes
        </Link>
      </div>
    </div>
  );
}
