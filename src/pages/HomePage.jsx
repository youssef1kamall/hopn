import { Search, ArrowRight, Clock, Zap, Shield, Star} from 'lucide-react'
import React from 'react'
import { Link } from 'react-router-dom'
const HomePage = () => {
  const featuredGyms = [
    {
      id: 1,
      name: 'Elite Fitness Center',
      location: 'Downtown District',
      rating: 4.8,
      image: 'https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&fit=crop',
      amenities: ['Pool', 'Sauna', 'Personal Training']
    },
    {
      id: 2,
      name: 'PowerHouse Gym',
      location: 'North Side',
      rating: 4.9,
      image: 'https://images.pexels.com/photos/1552106/pexels-photo-1552106.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&fit=crop',
      amenities: ['CrossFit', 'Boxing', 'Yoga Studio']
    },
    {
      id: 3,
      name: 'Wellness Hub',
      location: 'City Center',
      rating: 4.7,
      image: 'https://images.pexels.com/photos/1552103/pexels-photo-1552103.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&fit=crop',
      amenities: ['Spa', 'Pilates', 'Meditation']
    }
  ]
  const features = [
    {
      icon: Search,
      title: 'Find Gyms Nearby',
      description: 'Discover premium gyms and fitness centers in your area with our smart location-based search.'
    },
    {
      icon: Clock,
      title: 'Flexible Booking',
      description: 'Book gym sessions, classes, and personal training slots that fit your schedule.'
    },
    {
      icon: Zap,
      title: 'Instant Access',
      description: 'Get immediate access to hundreds of gyms with just one membership pass.'
    },
    {
      icon: Shield,
      title: 'Secure & Safe',
      description: 'All our partner gyms maintain the highest safety and hygiene standards.'
    }
  ];
  return (
    <div className='min-h-screen'>
       <section className='relative bg-gradient-to-br from-emerald-600 via-emerald-700 to-blue-700 text-white'>

           <div className='relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32'>
              <div className='grid lg:grid-cols-2 gap-12 items-center'>
                 <div className='space-y-6'>
                      <h1 className='text-5xl lg:text-6xl font-bold leading-tight'>
                        Your Fitness Journey Starts
                        <span className=' text-emerald-300'> Here</span>
                      </h1>
                      <p className='text-lg lg:text-xl text-emerald-100 leading-relaxed'>
                        Discover the best gyms, classes, and trainers in your area. 
                        Join a community that motivates you to achieve your fitness goals.
                      </p>
                      <div className='flex flex-col sm:flex-row gap-4'>
                         <Link to="/gym-search" className='text-emerald-700 font-semibold bg-white hover:text-white hover:bg-emerald-600
                            py-4 px-8 rounded-lg transition-colors flex items-center justify-center space-x-2'>
                            <Search className='w-5 h-5'/>
                            <span>Find Gym Near You</span>
                            <ArrowRight className='w-5 h-5 group-hover: translate-x-1 transition-transform' />
                          </Link>
                      </div>
                 </div>
                  <div className='hidden lg:block'>
                      <img 
                        src="https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop" 
                        alt="Hero Image" 
                        className='w-full h-auto rounded-lg shadow-2xl'
                      />
                  </div>
              </div>
           </div>
       </section>
       {/* Featured Gyms Section */}
       <section className='py-20 bg-white'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='text-center mb-12'>
            <h2 className='text-4xl font-bold text-gray-800 mb-2'>
                Why Choose FitPass?
            </h2>
            <p className='text-lg text-gray-800 max-w-2xl mx-auto'>
                 Experience the future of fitness with our comprehensive platform designed for modern lifestyles.
            </p>
          </div>
          <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8'>
             {features.map((features, index) =>(
              <div key={index} className='text-center p-6 rounded-lg hover:shadow-lg group'>
                <features.icon className='w-12 h-12 text-emerald-600 mx-auto mb-4' />
                <h3 className='text-xl font-semibold text-gray-800 mb-2'>{features.title}</h3>
                <p className='text-gray-600'>{features.description}</p>
              </div>
             ))}
          </div>
        </div>
       </section>
       { /* Featured Gyms Section */}
       <section className='py-20 bg-gray-50'>
        <div className='max-w-7x mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='text-center mb-16'>
            <h2 className='text-4xl font-bold mb-4'>Popular Gyms & Studios</h2>
            <p className='text-xl text-gray-800'>Discover top-rated fitness facilities loved by our community</p>
          </div>
          <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
            {featuredGyms.map((gym, index) =>(
              <div key={gym.id} className='bg-gray-100 rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300'>
                <div className='relative'>
                  <img 
                    src={gym.image} 
                    alt={gym.name} 
                    className='w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300 rounded-t-2xl'
                  />
                  <div className='absolute top-4 right-4 bg-white px-2 py-1 rounded-full flex item-center space-x-1'>
                        <Star className='w-3 h-4 text-yellow-500 fill-current' />
                        <span className='text-sm font-medium'>{gym.rating}</span>
                    </div>
                </div>
                <div className='p-6'>
                  <h3 className='text-xl font-semibold text-gray-800 mb-2'>{gym.name}</h3>
                  <p className='text-gray-600 mb-4'>{gym.location}</p>
                  <div className='flex flex-wrap gap-2'>
                    {gym.amenities.map((amenity, index) => (
                      <span key={index} className='bg-emerald-100 text-emerald-700 px-3 py-1 rounded-full text-sm'>
                        {amenity}
                      </span>
                    ))}
                  </div>
                  <Link 
                    to="/gym-search" 
                    className="block w-full text-center bg-emerald-600 text-white mt-5 py-2 px-4 rounded-lg font-medium transition-colors"
                  >
                    View Details
                  </Link>
                </div>
              </div> 
            ))}
          </div>
        </div>
       </section>
       {/*Members */}
       <section className='py-15 bg-emerald-600'>
          <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
            <div className='grid md:grid-cols-3 gap-8 text-center'>
              <div>
                <h2 className='text-5xl font-bold text-white mb-2'>500+</h2>
                <p className='text-gray-200'>Partner Gyms</p>
              </div>
              <div>
                <h2 className='text-5xl font-bold text-white mb-2'>100K+</h2>
                <p className='text-gray-200'>Active Members</p>
              </div>
              <div>
                <h2 className='text-5xl font-bold text-white mb-2'>1M+</h2>
                <p className='text-gray-200'>Workouts Completed</p>
              </div>
            </div>
          </div>
       </section>
       {/* CTA Section */}
       <section className='py-20 bg-gradient-to-r from-blue-400 to-emerald-600 text-white'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px8 text-center'>       
              <h1 className='text-4xl text-bold'>Ready to Transform Your Fitness Journey?</h1>
              <p className='text-xl mt-4'>Join thousands of fitness enthusiasts who have discovered the freedom of flexible gym access.</p>     
        </div>
       </section>
    </div>
  )
}

export default HomePage