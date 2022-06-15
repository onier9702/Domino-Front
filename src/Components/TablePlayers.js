
import React from 'react';
import { useSelector } from 'react-redux';
// import { onAuthStateChanged } from 'firebase/auth';

// import { auth } from '../firebase/firebase-config';

import { SinglePlayer } from './SinglePlayer';

export const TablePlayers = () => {

  const {players} = useSelector(state => state.table);

  
  return (

      <div className="table">
        <table class="table">
            <thead>
                <tr>
                    <th style={{color:'blue'}} scope="col">Jugador</th>
                    <th style={{color:'blue'}} scope="col">JJ</th>
                    <th style={{color:'blue'}} scope="col">G</th>
                    <th style={{color:'blue'}} scope="col">P</th>
                    <th style={{color:'blue'}} scope="col">DIF</th>
                    <th style={{color:'blue'}} scope="col">%G</th>
                    <th style={{color:'blue'}} scope="col">%P</th>

                </tr>
            </thead>
            <tbody>

              {
                players.map(element => (
                  <SinglePlayer 
                            key={element.id} 
                            {...element} 
                  />)
                )
              }

              { 

                // (checking) && 
                // listOfPlayers.map( (player) => (
                //   <SinglePlayer 
                //             key={player.id}
                //             {...player}
                //   />
                // ))
              }
            </tbody>
        </table>
      </div>
    
  )
}
