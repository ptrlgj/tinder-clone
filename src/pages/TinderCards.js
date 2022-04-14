import React, { useEffect, useState } from 'react'
import TinderCard from 'react-tinder-card'
import {collectionReference} from '../firebase'
import {doc, getDocs} from 'firebase/firestore'
import './TinderCards.scss'
import SwipeButtons from '../components/SwipeButtons'
function TinderCards() {
    const [people, setPeople] = useState([])
    //  [
    //     {
    //         name: 'steve jobs',
    //         url: 'https://www.biography.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cg_face%2Cq_auto:good%2Cw_300/MTY2MzU3OTcxMTUwODQxNTM1/steve-jobs--david-paul-morrisbloomberg-via-getty-images.jpg'
    //     },
    //     {
    //         name: 'bill gates',
    //         url: 'https://ocdn.eu/pulscms-transforms/1/zs5k9kpTURBXy84NTVhYmM3MDk0YWEyYjEwNDQ1ODg2ZjYzOTA2ZjExZi5qcGeSlQM6Ls0Hls0ERZMFzQMUzQG8gqEwBaExAA'
    //     }
    // ]
    useEffect(()=>{
        getDocs(collectionReference)
        .then((snapshot)=>{
            setPeople(snapshot.docs.map(doc=>{
                return {...doc.data(), id: doc.it}
            }))
        })
        .catch(error=>console.log(error))
    },[])
  return (
    <div className='tinderCards'>
        <div className="tinderCards__cardsContainer">
            {people.map((person, index)=>{
                return <TinderCard
                    className='swipe'
                    key={index}
                    preventSwipe={['up', 'down']}
                >
                    <div 
                        className="card"
                        style={{backgroundImage: `url(${person.url})`}}
                    >
                        <h3>{person.name}</h3>
                    </div>
                </TinderCard>
            })}
        </div>
        <SwipeButtons />
    </div>
  )
}

export default TinderCards