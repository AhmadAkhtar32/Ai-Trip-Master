export const SelectTravelList = [
  {
    id:1,
    title:'Just Me',
    desc: 'A sole traveles in exploration',
    icon:'🪂',
    people:'1'
},
{
    id:2,
    title:'A Couple',
    desc: 'Two traveles in tandem',
    icon:'🧑‍🤝‍🧑',
    people:'2 People'
},
{
    id:3,
    title:'Family',
    desc: 'A group of fun loving adv',
    icon:'🏠',
    people:'3 to 5 People'
},
{
    id:4,
    title:'Friends',
    desc: 'A bunch of thrill-seekes',
    icon:'🚗',
    people:'5 to 10 People'
}
];

export const SelectBudgetOptions = [
  {
    id:1,
    title: 'Cheap',
    desc: 'Stay conscious of costs',
    icon:'💵',
},
{
    id:2,
    title: 'Moderate',
    desc: 'Keep cost on the average side',
    icon:'💰',
},
{
    id:3,
    title: 'Luxury',
    desc: 'Dont worry about cost',
    icon:'💲',
}
];

export const AI_PROMPT = `
  Generate a travel plan for the destination: {location} for {totalDays} days. 
  Traveler type: {traveler}, with a {budget} budget. 
  Provide a list of hotel options including the name, address, and the most recent image URL (ensure the URL is working), geo coordinates, rating, and descriptions. 
  Suggest a daily itinerary with place names, details, image URLs, geo coordinates, ticket pricing, ratings, and travel time for each location for {totalDays} days, including the best time to visit. 
  Output in JSON format.
`;
export const PHOTO_REF_URL =
  "https://places.googleapis.com/v1/{NAME}/media?maxHeightPx=600&maxWidthPx=600&key=" +
  import.meta.env.VITE_GOOGLE_PLACE_API_KEY;
