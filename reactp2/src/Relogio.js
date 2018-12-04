/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
import React, { Component } from 'react';

export default class Relogio extends Component {
        getHoras() {
            document.getElementById("relogio").innerHTML = Date();
        }
        
        render(){
            return(
                    <div>
                        <button id="myBtn" onclick="getHoras()">Try it</button>
                        <p id="relogio"></p>
                    </div>
            )
        }
}

