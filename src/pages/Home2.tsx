import { useEffect, useState } from 'react';
import { client } from '../sanity/client';
import type { Property } from '../types/property';
import PropertyCard from '../components/PropertyCard';

export default function Home() {
  const [properties, setProperties] = useState<Property[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    client
      .fetch(`*[_type == "property"]`)
      .then((data) => {
        setProperties(data);
        setLoading(false);
      })
      .catch(console.error);
  }, []);

  if (loading) return <div>Carregando imóveis...</div>;

  return (
    <div>
      <h1>Imóveis Disponíveis</h1>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '20px' }}>
        {properties.map((property) => (
          <PropertyCard key={property._id} property={property} />
        ))}
      </div>
      {properties.length === 0 && <p>Nenhum imóvel encontrado.</p>}
    </div>
  );
}
