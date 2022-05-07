import React from 'react';
import { useParams } from 'react-router-dom';
import useInventoryDetails from '../Hooks/useInventoryDetails';

const InventoryDetails = () => {
    const {inventoryId} = useParams();
    const [product] = useInventoryDetails(inventoryId)
    return (
        <div>
            <h2>This is inventory</h2>
        </div>
    );
};

export default InventoryDetails;