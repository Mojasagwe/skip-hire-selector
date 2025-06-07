// Central skip data for the application
export const skipData = [
  {
    "id": 17933,
    "size": 4,
    "hire_period_days": 14,
    "transport_cost": null,
    "per_tonne_cost": null,
    "price_before_vat": 278,
    "vat": 20,
    "postcode": "NR32",
    "area": "",
    "forbidden": false,
    "created_at": "2025-04-03T13:51:46.897146",
    "updated_at": "2025-04-07T13:16:52.813",
    "allowed_on_road": true,
    "allows_heavy_waste": true
  },
  {
    "id": 17934,
    "size": 6,
    "hire_period_days": 14,
    "transport_cost": null,
    "per_tonne_cost": null,
    "price_before_vat": 305,
    "vat": 20,
    "postcode": "NR32",
    "area": "",
    "forbidden": false,
    "created_at": "2025-04-03T13:51:46.897146",
    "updated_at": "2025-04-07T13:16:52.992",
    "allowed_on_road": true,
    "allows_heavy_waste": true
  },
  {
    "id": 17935,
    "size": 8,
    "hire_period_days": 14,
    "transport_cost": null,
    "per_tonne_cost": null,
    "price_before_vat": 375,
    "vat": 20,
    "postcode": "NR32",
    "area": "",
    "forbidden": false,
    "created_at": "2025-04-03T13:51:46.897146",
    "updated_at": "2025-04-07T13:16:53.171",
    "allowed_on_road": true,
    "allows_heavy_waste": true
  },
  {
    "id": 17936,
    "size": 10,
    "hire_period_days": 14,
    "transport_cost": null,
    "per_tonne_cost": null,
    "price_before_vat": 400,
    "vat": 20,
    "postcode": "NR32",
    "area": "",
    "forbidden": false,
    "created_at": "2025-04-03T13:51:46.897146",
    "updated_at": "2025-04-07T13:16:53.339",
    "allowed_on_road": false,
    "allows_heavy_waste": false
  },
  {
    "id": 17937,
    "size": 12,
    "hire_period_days": 14,
    "transport_cost": null,
    "per_tonne_cost": null,
    "price_before_vat": 439,
    "vat": 20,
    "postcode": "NR32",
    "area": "",
    "forbidden": false,
    "created_at": "2025-04-03T13:51:46.897146",
    "updated_at": "2025-04-07T13:16:53.516",
    "allowed_on_road": false,
    "allows_heavy_waste": false
  },
  {
    "id": 17938,
    "size": 14,
    "hire_period_days": 14,
    "transport_cost": null,
    "per_tonne_cost": null,
    "price_before_vat": 470,
    "vat": 20,
    "postcode": "NR32",
    "area": "",
    "forbidden": false,
    "created_at": "2025-04-03T13:51:46.897146",
    "updated_at": "2025-04-07T13:16:53.69",
    "allowed_on_road": false,
    "allows_heavy_waste": false
  },
  {
    "id": 17939,
    "size": 16,
    "hire_period_days": 14,
    "transport_cost": null,
    "per_tonne_cost": null,
    "price_before_vat": 496,
    "vat": 20,
    "postcode": "NR32",
    "area": "",
    "forbidden": false,
    "created_at": "2025-04-03T13:51:46.897146",
    "updated_at": "2025-04-07T13:16:53.876",
    "allowed_on_road": false,
    "allows_heavy_waste": false
  },
  {
    "id": 15124,
    "size": 20,
    "hire_period_days": 14,
    "transport_cost": 248,
    "per_tonne_cost": 248,
    "price_before_vat": 992,
    "vat": 20,
    "postcode": "NR32",
    "area": "",
    "forbidden": false,
    "created_at": "2025-04-03T13:51:40.344435",
    "updated_at": "2025-04-07T13:16:52.434",
    "allowed_on_road": false,
    "allows_heavy_waste": true
  },
  {
    "id": 15125,
    "size": 40,
    "hire_period_days": 14,
    "transport_cost": 248,
    "per_tonne_cost": 248,
    "price_before_vat": 992,
    "vat": 20,
    "postcode": "NR32",
    "area": "",
    "forbidden": false,
    "created_at": "2025-04-03T13:51:40.344435",
    "updated_at": "2025-04-07T13:16:52.603",
    "allowed_on_road": false,
    "allows_heavy_waste": false
  }
];

// Helper function to calculate total price including VAT
export const calculateTotalPrice = (skip) => {
  return Math.round(skip.price_before_vat * (1 + skip.vat/100));
};

// Helper function to get skip image URL based on size
export const getSkipImageUrl = (size) => {
  const baseUrl = "https://yozbrydxdlcxghkphhtq.supabase.co/storage/v1/object/public/skips/skip-sizes/";
  
  if (size >= 20) {
    return `${baseUrl}20-yarder-skip.jpg`;
  } else if (size >= 10) {
    return `${baseUrl}5-yarder-skip.jpg`;
  } else {
    return `${baseUrl}4-yarder-skip.jpg`;
  }
};

// Helper function to find skip by ID
export const findSkipById = (skipId) => {
  return skipData.find(skip => skip.id === skipId);
}; 