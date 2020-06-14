import React, { Component } from 'react'
import Menu from '../../menu/menu'
export default class AboutUs extends Component {
    render() {
        return (
          
           <div >
             <Menu />
           <br />
            <div style={{boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2)', maxWidth: '300px', margin: 'auto', textAlign: 'center', fontFamily: 'arial', fontSize: '10px'}}>
            <img src="https://cdn.iconscout.com/icon/free/png-256/avatar-370-456322.png" alt="John" style={{width: '20%'}} />
            <h1>Muslim</h1>
            <p style={{color: 'grey', fontSize: '15px'}}>21120117140032</p><br />
          </div>
          <br />
          <div style={{boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2)', maxWidth: '300px', margin: 'auto', textAlign: 'center', fontFamily: 'arial', fontSize: '10px'}}>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTyaOR79IAt1jE3gMyUnWDSZaiwgG-BvzO3c5hE8xWHUfi6hxTs&usqp=CAU" alt="John" style={{width: '20%'}} />
            <h1>Nanda Hidayatullah A.</h1>
            <p style={{color: 'grey', fontSize: '15px'}}>21120117120012</p><br />
          </div>
          <br />
          <div style={{boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2)', maxWidth: '300px', margin: 'auto', textAlign: 'center', fontFamily: 'arial', fontSize: '10px'}}>
          <img src="https://cdn.iconscout.com/icon/free/png-512/avatar-367-456319.png" alt="John" style={{width: '20%'}} />
            <h1>Rama F.</h1>
            <p style={{color: 'grey', fontSize: '15px'}}>21120117140023</p><br />
          </div>
          </div>
        )
    }
}
