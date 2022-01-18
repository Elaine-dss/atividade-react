import './App.css'
import React from "react";

import Primeiro from './components/basics/Primeiro'
import ComParametro from './components/basics/ComParametro'
import ComFilhos from './components/basics/ComFilhos'
import Card from './components/layout/Card'
import Repeticao from './components/basics/Repeticao';
import Condicional from './components/basics/Condicional';
import CondicionalComIf from './components/basics/CondicionalComIf';
import Pai from './components/comunicacao/direta/Pai';
import Super from './components/comunicacao/indireta/Super';
import Input from './components/form/Input';
import Contador from './components/Contador/Contador';
import Mega from './components/mega/Mega';

export default (props) => (
    <div className="App">
        <h1>Fundamentos React</h1>

        <div className='Cards'>
            <Card titulo='#11 - Mega-Sena' color='#DE2F2F'>
                <Mega qtdNumeros={6} />
            </Card>
            <Card titulo='#10 - Contador' color='#000'>
                <Contador valor={10}/>
            </Card>
            <Card titulo='#09 - Input' color='#AF7AC5'>
                <Input/>
            </Card>
            <Card titulo='#08 - Comunicação Indireta' color='#1F42A5'>
                <Super/>
            </Card>
            <Card titulo='#07 - Comunicação direta' color='#FF7033'>
                <Pai sobrenome='Freitas'></Pai>
            </Card>
            <Card titulo='#06 - Condicional versão 2' color='#F683B6'>
                <CondicionalComIf numero={12}/>
            </Card>
            <Card titulo='#05 - Condicional versão 1' color='#3498DB'>
                <Condicional numero={11}/>
            </Card>
            <Card titulo='#04 - Repetição' color='#1F42A5' color='#fdbe02'>
                <Repeticao/>
            </Card>
            <Card titulo='#03 - Componente com filhos' color='#420699'>
                <ComFilhos>
                    <ul>
                        <li>Ana</li>
                        <li>Bia</li>
                        <li>Carlos</li>
                        <li>Daniel</li>
                    </ul>
                </ComFilhos>
            </Card>
            <Card titulo='#02 - Componente Com Parâmetro' color='#209F3C'>
                <ComParametro titulo='Esse é o título' 
                subtitulo='Esse é o subtítulo' />
            </Card>
            <Card titulo='#01 - Primeiro Componente' color='#211F3C'>
                <Primeiro/>
            </Card>
        </div>

    </div>
)