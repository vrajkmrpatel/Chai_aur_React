import React, { useEffect, useState } from 'react'

// function to limit the number of words in description
function truncateDescription(description, maxLength) {
    const words = description.split(' ');
    if (words.length > maxLength) {
      return words.slice(0, maxLength).join(' ') + '...';
    }
    return description;
  }

const Card = () => {

    const [cards, setCards] = useState([]);

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await fetch("./src/data/data.json");
                const data = await response.json();
                console.log(data);
                setCards(data);

            } catch (error) {
                console.log('Error fetching data:', error);
            }
        }

        fetchData();
    }, []);


    return (
        <div className='container mx-auto w-full h-[85vh] mt-5 '>
            <div className='flex flex-wrap justify-center gap-2'>
                {cards.map(card => (
                    <div 
                    key={card.id}
                    className='w-30 max-w-96 flex flex-col gap-2 m-4 bg-white p-4 rounded-lg drop-shadow-md'>
                        <img src={card.img} className='w-90 h-full rounded-lg' alt={card.title} />
                        <div className='text-xl font-bold'>{card.title}</div>
                        <p className='text-sm text-gray-600'>{truncateDescription(card.description, 15)}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Card