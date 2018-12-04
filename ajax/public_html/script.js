/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
const PATH_VEICULOS = 'https://swapi.com/api/vehicles/?search=';

class Script{
    
    constructor(){
        
        this._onJsonReady = this._onJsonReady.bind(this);
        this._onSubmit = this._onSubmit.bind(this);
        
        this.veiculos = [];
        
        const form = document.querySelector('form');
        
        form.addEventListener('submit', this._onSubmit);
        
        let div = document.querySelector('#divVei');
        
        div.innerHTML = '<table></table>';
        
        }
        
        _onSubmit(event){
            event.preventDefault();
            let textInput = document.querySelector('#veiculo');
            let query = encodeURIComponent(textInput.value);
            console.log(PATH_VEICULOS+query);
            this.veiculos = [];
            
            fetch(PATH_VEICULOS+query)
                    .then(this._onResponse)
                    .then(this._onJsonReady);
        }
        
        _onJsonReady(json){
            if(!json.results){
                return;
            }
            
            for(const item of json.results){
                this.veiculos.push(item);
            }
            this._renderVeiculos();
        }
        
        _onResponse(response){
            return response.json();
        }
        
        _renderVeiculos(){
            const container = document.querySelector('#divVei');
            for(const p of this.personagens){
                let tr = document.createElement('tr');
                let td = document.createElement('td');
                td.innerHTML = p.name;
                tr.appendChild(td);
                container.appendChild(tr);
            }
        }
}

