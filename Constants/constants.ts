import { GridColDef, GridValueGetterParams } from '@mui/x-data-grid';


export const NavLinks = [
    {
        href: '/website/home', id: 1, text: 'Home'
    }, {
        href: '/website/about', id: 2, text: 'About Us'
    }
    , {
        href: '/website/blogs', id: 3, text: 'Blogs'
    }
    , {
        href: '/landlords-auth/login', id: 4, text: 'Landlords'
    }
    , {
        href: '/website/contact', id: 5, text: 'Contact Us'
    }
]

export const menuItems = [
    {
        labelText: "Most Popular",
    },
    {
        labelText: "Highest price first",
    },
    {
        labelText: "Lowest price first",
    },
    {
        labelText: "Recently Added",
    }
]


export const propertyFeatures = [
  "Water available all-through",
  "Own water meter",
  "Shared water bill",
  "Water available few days",
  "Tanked water available",
  "Borehole water available",
  "Power(Tokens)",
  "Power(Post pay)",
  "Security guard available",
  "CCTV surveillance installed",
  "Resident caretaker available through-out",
  "Electric fence",
  "Secure car park available",
  "Parking not available",
  "Fully tiled with beautiful tiles",
  "Partly tiled",
  "Spacious Kitchen",
  "Open Kitchen",
  "Kitchen fittings installed",
  "Inbuilt wardrobes",
  "No inbuilt wardrobes",
  "Large windows for natural light",
  "Newly built",
  "Newly painted",
  "Pets allowed",
  "Pets not allowed",
  "Parties allowed",
  "Parties not allowed",
  "WiFi available",
  "WiFi not available",
  "Internet cables available",
  "DStv installed for your entertainment and learning.",
  "Dstv not fixed",
  "An extra room available for an activity like laundry or storing items you don't frequently use.",
  "A children's play area keeps your kids busy, happy, healthy, and socialized.",
  "Own compound",
  "Kitchen garden where you can grow vegetables.",
  "Swimming pool is around in case you want to have the awesome watery experience.",
  "Affordable gym facility helps you stay strong, healthy, and in great shape.",
  "Elevator for upper floors",
  "Master ensuite",
  "Garbage collected at a fee",
  "Free garbage collection",
  "Hospital nearby just in case of inevitable medical emergencies.",
  "A police station is around, with 24-hour police patrols, hence neighborhood security is guaranteed. You can walk alone at midnight safely.",
  "Primary schools nearby, so your children don't have to commute long distances.",
  "Main road nearby",
  "Church nearby",
  "Mosque nearby",
  "Shopping center nearby, should you need to buy something.",
  "Shops Nearby",
  "Shopping Mall Nearby",
  "Rent paid via MPESA",
  "Rent paid via Bank",
  "Rent paid via Caretaker",
  "DSQ/Servant quarters",
  "Spacious sitting room for you to set everything you need in it.",
  "Separate bathroom and toilet",
  "Combined bathroom and toilet",
  "Gated community",
  "Suitable for a single occupant",
  "Suitable for a lovely couple",
  "Suitable for a small family",
  "Suitable for a large family",
  "Suitable for single travelers",
  "Suitable for a married couple",
  "Suitable for family traveling",
  "Suitable for traveling business people",
  "Suitable for college students",
  "Suitable for pet lovers",
  "Suitable for Programmers",
  "Other",
  "Large windows allowing natural light in, saving you electricity and making your house a healthy place.",
  "Spacious Bedrooms, in case you have to install more beds",
  "Instant hot showers save you time when you need a quick one.",
  "Open Kitchen, easy to access from your sitting room.",
  "A private balcony where you can work out regularly, meditate undisturbed, get sunlight exposure for your health and still maintain your privacy.",
  "A bathtub is installed for your absolute relaxation.",
  "Large glass display windows",
  "The lift takes you and your clients to the top floors, saving you valuable time and energy.",
  "Restaurants around",
  "Wide verandas"
];


export const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 90 },
    {
      field: 'firstName',
      headerName: 'First name',
      width: 150,
      editable: true,
    },
    {
      field: 'lastName',
      headerName: 'Last name',
      width: 150,
      editable: true,
    },
    {
      field: 'age',
      headerName: 'Age',
      type: 'number',
      width: 110,
      editable: true,
    },
    {
      field: 'fullName',
      headerName: 'Full name',
      description: 'This column has a value getter and is not sortable.',
      sortable: false,
      width: 160,
      valueGetter: (params: GridValueGetterParams) =>
        `${params.row.firstName || ''} ${params.row.lastName || ''}`,
    },
  ];

  export const rows = [
    { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
    { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
    { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
    { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
    { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
    { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
    { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
    { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
    { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
  ];