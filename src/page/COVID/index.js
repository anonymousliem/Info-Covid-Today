import React, { Component } from 'react'
import Menu from '../../menu/menu'
import axios from 'axios';  

import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import {Line} from 'react-chartjs-2';

var moment = require('moment'); // require

export default class index extends Component {

    constructor(props) {  
        super(props);  
        this.state = { Data: {}, deaths : {}, cases : {}, tests : {}, time : '' };  
}  

    componentDidMount(){

      axios({
        "method":"GET",
        "url":"https://indonesia-covid-19.mathdro.id/api/harian",
        }).then((response)=>{
          console.log(response.data.data[0])}
        ).catch((response)=>{
          console.log(response)}
        )

        // var Role = localStorage.getItem("Role")
        // var status = localStorage.getItem("token");
        // if(!status){
        //     alert('harap login terlebih dahulu');
        //     this.props.history.push('/login');
        // }else{
        //     if(Role !== "admin"){
        //         alert('anda tidak punya akses ke sini');
        //         this.props.history.push('/user');
        //     }
        // }
    
 
        axios({
            "method":"GET",
            "url":"https://covid-193.p.rapidapi.com/history",
            "headers":{
            "content-type":"application/octet-stream",
            "x-rapidapi-host":"covid-193.p.rapidapi.com",
            "x-rapidapi-key":"7603acf3bamsh8406af94904d928p1a6b4cjsn49330239d75f",
            "useQueryString":true
            },"params":{
            "day": moment(new Date()).format("YYYY-MM-DD"),
            "country":"germany"
            }
            })
            .then((response)=>{
              console.log(response)
              this.setState({
                deaths : {
                    new : response.data.response[0].deaths.new,
                    total : response.data.response[0].deaths.total
                },
                cases : {
                    active :  response.data.response[0].cases.active,
                    new :  response.data.response[0].cases.new,
                    recovered :  response.data.response[0].cases.recovered,
                    total :  response.data.response[0].cases.total,

                  },
                tests : {
                  total :  response.data.response[0].tests.total,
                },
                  country :  response.data.response[0].country,
                  time : response.data.response[0].time
              })

              
            })
            .catch((error)=>{
              console.log(error)
            })

        //     .then(res => {  
        //         console.log(res);  
        //         const ipl = res.data.stat_by_country;  
        //         let playername = [];  
        //         let runscore = [];  
        //         ipl.forEach(record => {  
        //                 playername.push(record.record_date);  
        //                 runscore.push(record.total_recovered);  
        //         });  
        //         this.setState({  
        //                 Data: {  
        //                         labels: playername,  
        //                         datasets: [  
        //                                 {  
        //                                         label: 'IPL 2018/2019 Top Run Scorer',  
        //                                         data: runscore,  
        //                                         backgroundColor: [  
        //                                                 "#3cb371",  
        //                                                 "#0000FF",  
        //                                                 "#9966FF",  
        //                                                 "#4C4CFF",  
        //                                                 "#00FFFF",  
        //                                                 "#f990a7",  
        //                                                 "#aad2ed",  
        //                                                 "#FF00FF",  
        //                                                 "Blue",  
        //                                                 "Red"  
        //                                         ]  
        //                                 }  
        //                         ]  
        //                 }  
        //         });  
        // })  
    
        // axios({
        //     "method":"GET",
        //     "url":"https://coronavirus-monitor.p.rapidapi.com/coronavirus/latest_stat_by_country.php",
        //     "headers":{
        //     "content-type":"application/octet-stream",
        //     "x-rapidapi-host":"coronavirus-monitor.p.rapidapi.com",
        //     "x-rapidapi-key":"7603acf3bamsh8406af94904d928p1a6b4cjsn49330239d75f",
        //     "useQueryString":true
        //     },"params":{
        //     "country":"indonesia"
        //     }
        //     })
        //     .then((response)=>{
        //       console.log(response)
        //     })
        //     .catch((error)=>{
        //       console.log(error)
        //     })


      

    }
    render() {
      const state = {
        labels: ['January', 'February', 'March',
                'April', 'May'],
        datasets: [
          {
            label: 'Rainfall',
            fill: false,
            lineTension: 0.5,
            backgroundColor: 'rgba(75,192,192,1)',
            borderColor: 'rgba(0,0,0,1)',
            borderWidth: 2,
            data: [65, 59, 80, 81, 56]
          }
        ]
      }

          const paperStyle = {
            textAlign: 'center',
            marginLeft : '3px',
 
          }
        return (
            <div>
            <Menu />
                {/* <p>Halo {localStorage.getItem("username")}, anda login sebagai {localStorage.getItem("Role")} </p> */}
                
                <center>
         <h1> &nbsp; Monitoring COVID-19 Di Negara {this.state.country} 
         
         <br />Pada Tanggal {(this.state.time).substring(0,10)} Jam : {(this.state.time).substring(11,19)}(GMT+0)*</h1>
         </center>
                <div  style={{marginLeft:'10px', marginRight:'10px'}}>
      <Grid container spacing={3}>
      <Grid item xs>
          <Paper className={paperStyle}>
        
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          height="140"
          image="https://user-images.githubusercontent.com/38047246/83287432-db8cd000-a20b-11ea-8e2b-31c7e5c8657b.png"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            CASES
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          Terdapat {this.state.cases.active} Kasus Aktif, {this.state.cases.new} Kasus baru, {this.state.cases.recovered} Orang Sembuh.
            Jumlah Total {this.state.cases.total} Kasus
          </Typography>
        </CardContent>
      </CardActionArea>
      

          </Paper>
        </Grid>
  
        <Grid item xs>
          <Paper className={paperStyle}>
        
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          height="140"
          image="https://user-images.githubusercontent.com/38047246/83287580-1e4ea800-a20c-11ea-867a-b2c299986085.png"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Deaths
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          Saat ini terdapat {this.state.deaths.new} Kematian. Total Kematian Sekarang {this.state.deaths.total} orang
          <font color="white">aaaaa</font>
          </Typography>
        </CardContent>
      </CardActionArea>
      

          </Paper>
        </Grid>

        <Grid item xs>
          <Paper className={paperStyle}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          height="140"
          image="https://user-images.githubusercontent.com/38047246/83322517-8b048980-a282-11ea-9f2b-bc42e16aba04.png"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
           Tests
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          Total Yang Sudah Di Test : {this.state.tests.total} orang <font color="white">aaaaa aaaa aaaa aaaa aaaa aaa </font>
          
          </Typography>
        </CardContent>
      </CardActionArea>
      

          </Paper>
        </Grid>
      </Grid>
    </div>
          <br />
          <p> &nbsp; *Sumber :  https://rapidapi.com/api-sports/api/covid-193?endpoint=apiendpoint_dfb9e52d-bd90-48ec-a571-8b78610a736d</p>

            </div>
        )
    }
}

