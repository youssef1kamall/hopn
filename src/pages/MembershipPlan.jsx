import React from 'react'

const MembershipPlan = () => {
  const gymPlans = [
    {
      id: 1,
      name: 'Basic Plan',
      description: 'Access to all partner gyms with basic amenities',
      price: '$19.99/month',
      features: [
        'Access to all partner gyms',
        'Basic fitness classes',  
        'Mobile app access',
        '24/7 Customer Support',
      ],
    },
    {
      id: 2,
      name: 'Standard Plan',
      description: 'Includes access to premium facilities and classes.',
      price: '$29.99/month',
      features: [
        'Access to premium facilities',
        'Basic fitness classes',
        'Mobile app access',
        '24/7 Customer Support',
      ],
    },
    {
      id: 3,
      name: 'Premium Plan',
      description: 'All-inclusive access with personal training sessions.',
      price: '$49.99/month',
      features: [
        'All-inclusive access',
        'Personal training sessions',
        'Mobile app access',
        '24/7 Customer Support',
      ],
    },{
      id: 4,
      name: 'Premium Plan',
      description: 'All-inclusive access with personal training sessions.',
      price: '$49.99/month',
      features: [
        'All-inclusive access',
        'Personal training sessions',
        'Mobile app access',
        '24/7 Customer Support'   
      ],
    }

  ]
  return (
    <div className='flex justify-center min-h-screen bg-gray-100'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <h2 className='mt-5 text-center font-bold text-2xl text-emerald-700'>FitPass Fitness Plans For Members</h2>
         <div className='m-4'>
           <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-4 mt-15'>
            {gymPlans.map((gym) => (
            <div key={gym.id} className='bg-white rounded-2xl flex py-10 px-10 transition-shadow duration-400 flex-col items-bottom justify-between '>
              
                <h2 className='font-bold text-xl text-emerald-700'>{gym.name}</h2>
                  <p className=' mt-1'>{gym.description}</p>
                  <p className='mt-3 font-semibold text-2xl'>{gym.price}</p>
                  <ul className='mt-4 space-y-4'>
                      {gym.features.map((features, index) => (
                       <li className='' key={index}>• {features}</li>
                       ))}
                  </ul>
              
              <button className='text-white bg-emerald-500 rounded-xl px-4 py-2 mt-2 w-full hover:cursor-pointer'>Subscribe Now</button>
            </div>
          ))}
        </div>
         </div>
      </div>
    </div>
  
  )
}

export default MembershipPlan