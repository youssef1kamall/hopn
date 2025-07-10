import React,{useState} from 'react'
import { Search, MapPin, Filter, Star, Clock, Car, Wifi, Dumbbell} from 'lucide-react'

const allFilters = [
    'Swimming Pool', 'Sauna', 'Personal Training', 'Group Classes',
    'CrossFit', 'Yoga', 'Pilates', 'Boxing', 'Spa Services', 'Parking'
  ];

const GymSearch = () => {
  const [showMore, setShowMore] = useState(2);
  const [selectedFilters, setSelectedFilters] = useState([]);
  const [searchGym, setSearchGym] = useState('');
  const [searchLocation, setSearchLocation] = useState('');
  const [sortBy, setSortBy] = useState('');

  const moreGyms = () =>{
    setShowMore((pre) => pre + 1)
  }
  const getAmenities = (amenity) => {
  const icons = {
      'Pool': '🏊‍♂️',
      'Sauna': '🧖‍♀️',
      'Personal Training': '💪',
      'Parking': Car,
      'WiFi': Wifi,
      'CrossFit': Dumbbell,
      'Boxing': '🥊',
      'Group Classes': '👥',
      'Spa Services': '💆‍♀️',
      'Yoga': '🧘‍♀️',
      'Pilates': '🤸‍♀️',
      'Meditation': '🧘'
    };
  return icons[amenity] || '❓';
}
  const gymFound = [
    {
      id: 1,
      name: 'Elite Fitness Center',
      location: '123 Main St, Downtown',
      distance: '0.5 miles',
      rating: 4.8,
      reviews: 234,
      image: 'https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&fit=crop',
      price: '$29/day',
      amenities: ['Pool', 'Sauna', 'Personal Training', 'Parking', 'WiFi'],
      openHours: '5:00 AM - 11:00 PM',
      description: 'Premium fitness facility with state-of-the-art equipment and expert trainers.'
    },
    {
      id: 2,
      name: 'PowerHouse Gym',
      location: '456 Oak Ave, North Side',
      distance: '1.2 miles',
      rating: 4.9,
      reviews: 189,
      image: 'https://images.pexels.com/photos/1552106/pexels-photo-1552106.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&fit=crop',
      price: '$35/day',
      amenities: ['CrossFit', 'Boxing', 'Group Classes', 'Parking'],
      openHours: '24/7',
      description: 'High-intensity training facility specializing in CrossFit and functional fitness.'
    },
    {
      id: 3,
      name: 'Wellness Hub',
      location: '789 Pine St, City Center',
      distance: '0.8 miles',
      rating: 4.7,
      reviews: 156,
      image: 'https://images.pexels.com/photos/1552103/pexels-photo-1552103.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&fit=crop',
      price: '$32/day',
      amenities: ['Spa Services', 'Yoga', 'Pilates', 'Meditation'],
      openHours: '6:00 AM - 10:00 PM',
      description: 'Holistic wellness center focusing on mind-body fitness and relaxation.'
    },
    {
      id: 4,
      name: 'Iron Temple Gym',
      location: '321 Elm St, South District',
      distance: '1.5 miles',
      rating: 4.6,
      reviews: 201,
      image: 'https://images.pexels.com/photos/1552252/pexels-photo-1552252.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&fit=crop',
      price: '$25/day',
      amenities: ['Personal Training', 'Group Classes', 'Parking'],
      openHours: '5:00 AM - 12:00 AM',
      description: 'Traditional gym with extensive weightlifting equipment and experienced trainers.'
    }
    
  ];
    const filteredGyms = gymFound
      .filter((gym) => {
        const matchesName = gym.name.toLowerCase().includes(searchGym.toLowerCase());
        const matchesLocation = gym.location.toLowerCase().includes(searchLocation.toLowerCase());
        const matchesFilters = selectedFilters.length === 0 ||
              selectedFilters.some((filter) => gym.amenities.includes(filter));
        return matchesName && matchesLocation && matchesFilters;
      })
      .sort((a, b) => {
        if (sortBy === 'price') {
          const priceA = parseFloat(a.price.replace(/[^0-9.]/g, ''));
          const priceB = parseFloat(b.price.replace(/[^0-9.]/g, ''));
          return priceA - priceB;
        }
        if (sortBy === 'rating') return b.rating - a.rating;
        if (sortBy === 'distance') {
          const distanceA = parseFloat(a.distance);
          const distanceB = parseFloat(b.distance);
          return distanceA - distanceB;
        }
     return 0;
  });

      const toggleFilter = (filter) => {
        if(selectedFilters.includes(filter)){
          setSelectedFilters(selectedFilters.filter(f => f !== filter));
        }else{
          setSelectedFilters([...selectedFilters, filter]);
        }
      }

  return (
   <div className='min-h-screen bg-gray-100 pt-8 pb-8'>
    <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
      {/*Header Section */}
      <div className='mb-8'>
        <h1 className='font-bold text-4xl'>Find Your Perfect Gym</h1>
        <p className='mt-6 text-lg text-gray-500'>Discover premium fitness facilities in your area</p>
      </div>
      {/*Search Filter */}
      <div className='bg-white rounded-lg shadow-md p-6 mb-7'>
        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6'>
             {/*Search Gym*/}
          <div className='relative'>
              <Search className='absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-5' />
              <input 
                 type='text' 
                value={searchGym}
                onChange={(e) => setSearchGym(e.target.value)}
                placeholder='Search Gym' 
                className='w-full border border-gray-300 pl-10 py-3 rounded-lg bg-gray-100'
                />
          </div>
          {/*search location*/}
          <div className='relative'>
            <MapPin  className='absolute left-3 top-1/2 transform text-gray-400 -translate-y-1/2 h-4 w-5'/>
            <input 
            type='text'
            value={searchLocation}
            onChange={(e) => setSearchLocation(e.target.value)} 
            placeholder='Search Location' 
            className='w-full pl-10 py-3 rounded-lg bg-gray-100 border border-gray-300'/>
          </div>
          {/*select by sort*/}
          <select 
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className='w-full rounded-lg bg-gray-100 px-4 py-3 border border-gray-300'>
            <option value="">Sort By</option>
            <option value="price">Sort By Price </option>
            <option value="rating">Sort By Rating</option>
            <option value="distance">Sort By Distance</option>
          </select>
        </div>
        {/*Filter Section */}
        <div className='flex items-center gap-2 mb-2'>
          <Filter  className='h-5 w-5 text-gray-500'/>
          <h1 className='font-medium text-gray-600'>Amenities:</h1>
        </div>
        <div className='flex flex-wrap gap-2'>
            {allFilters.map((filter) =>(
              <span 
              key={filter}
              onClick={() => toggleFilter(filter)}
              className={`px-2 rounded-lg py-1 font-medium transition-colors duration-300 hover:cursor-pointer ${
                     selectedFilters.includes(filter)
                          ? 'bg-emerald-600 text-white'
                          : 'bg-gray-100 text-gray-600 hover:bg-emerald-600 hover:text-white'
                      }`}
                >
                {filter}
              </span>
            ))}
        </div>
      </div>
      {/*Gym List Section */}
      <div className='grid md:grid-cols-2 lg:grid-cols-1 gap-5'>
        {filteredGyms.slice(0, showMore).map((gym, id) => (
          <div key={id} className='bg-white overflow-hidden rounded-lg shadow-md mb-4'>
            <div className='md:flex'>
              <div className='md:w-1/3'>
                <img src={gym.image} alt={gym.name} className='w-full h-60 md:h-full object-cover hover:cursor-pointer'/>
              </div>
              <div className='md:w-2/3 p-6'>
                  <div className='flex justify-between items-start mb-4'>
                      <div>
                          <h2 className='text-2xl font-semibold text-gray-800'>{gym.name}</h2>
                           <div className='flex items-center mb-2 text-gray-500 '>
                                <MapPin className='h-4 w-4 mr-1' />
                                <span className='text-sm'>{gym.location}</span>
                                <span className='mx-2'>•</span>
                                <span className='text-sm ml-1'>{gym.distance}</span>
                           </div>
                      
                            <div className='flex items-center mb-2 '>
                                <div className='flex items-center'>
                                  <Star className='h-4 w-4 mr-1 text-yellow-500 fill-current' />
                                  <span className='font-medium text-black'>{gym.rating}</span>
                                </div>
                                <span className='mx-2'>•</span>
                                <span className='text-sm ml-1'>{gym.reviews} Reviews</span>
                            </div> 
                      </div>
                                <div className='text-right'>
                                  <div className='text-emerald-500 font-bold'>{gym.price}</div>
                                  <div className='text-sm text-gray-500'>Per Visit</div>
                                </div>
                  </div>
                         <div className='flex items-center mt-4'>
                          <p>{gym.description}</p>
                         </div>
                         <div className='flex items-center mt-2'>
                          <Clock className='h-4 w-4 mr-2 text-gray-500' />
                           <span className='text-gray-500'>{gym.openHours}</span>
                         </div>
                            <div className='flex flex-wrap gap-2 mt-2'>
                                {gym.amenities.map((amenity, index) => {
                                  const IconComponent = getAmenities(amenity)
                                  return(
                                    <div key={index} className='flex items-center bg-gray-500 px-3 py-2 rounded-full text-sm'>
                                      {typeof IconComponent === 'string' ? (
                                        <span>{IconComponent}</span>
                                      ) : (
                                        <IconComponent className='h-4 w-4 mr-1 text-white' />
                                      )}
                                      <span className='text-sm text-white'>{amenity}</span>
                                    </div>
                                  )
                              })} 
                            </div>
                           <div className='flex space-x-3 '>
                              <button className='bg-emerald-600 text-white mt-4 px-4 py-1 rounded-lg flex-1 font-bold hover:cursor-pointer '>
                                Book Now
                              </button>
                              <button className='border border-emerald-600 mt-4 px-4 py-2 rounded-lg hover:cursor-pointer'>
                                View Details
                              </button>
                           </div>                
                  </div>
                </div>
          </div>
            ))}
      </div>
      {/*Load More */}
            {showMore < filteredGyms.length && (
              <div className='text-center mt-7 mb-8'>
                <button className='bg-emerald-600 text-white px-4 py-2 rounded-lg font-medium hover:cursor-pointer'
                onClick={moreGyms}> Load More </button>
              </div>
            )}
    </div>
  </div>
  )
}

export default GymSearch