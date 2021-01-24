import React from 'react'
import ImagemProdutoIpad11 from '../img/ipad11.jpg';
import ImagemProdutoFritadeira from '../img/fritadeira.jpg'
import ImagemProdutoCelular from '../img/celular.jpg'
import '../components/Produtos.css';

export class Produtos extends React.Component{
    render(){
        return(
            <div className="produtos">
                <div className="produtosIndividuais">
                    <img src={ImagemProdutoIpad11} />
                    <h3>iPad Pro 11” Apple Wi-Fi + Cellular 64GB - Cinza Espacial</h3>
                    <p>de R$ 8.999,00</p>
                    <h4>por R$ 7.524,91</h4>
                    <a href="" class="botao botaoCarrinho">Colocar no carrinho</a>
                </div>
                <div className="produtosIndividuais">
                    <img src={ImagemProdutoFritadeira} />
                    <h3>Fritadeira Elétrica sem Óleo/Air Fryer Nell Smart - Preta 2,4L com Timer</h3>
                    <p>de R$ 289,90</p>
                    <h4>por R$ 229,90</h4>
                    <a href="" class="botao botaoCarrinho">Colocar no carrinho</a>
                </div>  
                <div className="produtosIndividuais">
                    <img src={ImagemProdutoCelular} />
                    <h3>Smartphone Samsung Galaxy M21s 64GB Preto 4G - Octa-Core 4GB RAM 6,4” Câm. Tripla + Selfie 32MP</h3>
                    <p>de R$ 1.899,00</p>
                    <h4>por R$ 1.332,00</h4>
                    <a href="" class="botao botaoCarrinho">Colocar no carrinho</a>
                </div>
            </div>
        )
    };
}