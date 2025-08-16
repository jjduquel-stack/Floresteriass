import React from 'react';
import { plantsData } from '../data/plantsData';
import PlantCard from './PlantCard';


function ProductsPage() {
  // Agrupar plantas por categoría
    const groupedPlants = plantsData.reduce((groups, plant) => {
    const category = plant.category;
    if (!groups[category]) {
        groups[category] = [];
    }
    groups[category].push(plant);
    return groups;
    }, {});

    return (
    <div style={productsStyles.container}>
        <div style={productsStyles.content}>
        {/* Renderizar cada categoría */}
        {Object.entries(groupedPlants).map(([category, plants]) => (
            <section key={category} style={productsStyles.section}>
            <h2 style={productsStyles.categoryTitle}>{category}</h2>
            <div style={productsStyles.plantsGrid}>
                {plants.map(plant => (
                <PlantCard key={plant.id} plant={plant} />
                ))}
            </div>
            </section>
        ))}
        </div>
    </div>
    );
}

const productsStyles = {
    container: {
    minHeight: '100vh',
    backgroundColor: '#f8f9fa',
    paddingBottom: '2rem',
    },
    content: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '2rem',
    },
    section: {
    marginBottom: '3rem',
    },
    categoryTitle: {
    fontSize: '2rem',
    color: '#2c3e50',
    marginBottom: '1.5rem',
    textAlign: 'center',
    fontWeight: 'bold',
    },
    plantsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '2rem',
    }
};

export default ProductsPage;