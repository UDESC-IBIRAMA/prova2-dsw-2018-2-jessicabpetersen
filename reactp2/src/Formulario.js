/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
import React, { Component } from 'react';

export default class Formulario extends Component {

    render() {
        return(
                <div>
                    <form>
                        <label>Texto </label><input type="text" />
                        <label>Marcação </label> <input type="checkbox"/>
                        <input type="submit"/>
                    </form>
                </div>
                )
    }
}