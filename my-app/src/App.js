import React from 'react'; 
import './App.css'; 
import logo from './LOGO-ERIC.png';

function App() { 
	return ( 
		<div> 
			<nav class="navbar background"> 
				<ul class="nav-list"> 
					<div class="logo"> 
						<img src={logo} /> 
					</div> 
					<li><a href="sobre">Sobre</a></li> 
					<li><a href="curriculo">Currículo</a></li> 
					<li><a href="projetos">Projetos</a></li> 
					<li><a href="contato">Contato</a></li> 
				</ul> 

				<div class="rightNav"> 
					<input type="text" name="search" id="search" /> 
					<button class="btn btn-sm">Search</button> 
				</div> 
			</nav> 

			<section class="section"> 
				<div class="box-main"> 
					<div class="firstHalf"> 
						<h1 class="text-big"> 
							Olá, meu nome é Eric Tamashiro Kurachi
						</h1> 
						<p class="text-small"> 
              Desenvolvedor de software com 2 anos de experiência profissional. Durante a graduação, desenvolvi diversos projetos visando o ensino de programação e inteligência artificial que impactaram centenas de pessoas. Criei e otimizei soluções de automação e serviços web que aumentaram a produtividade e ajudaram a coletar métricas auxiliando cerca de 70 técnicos e engenheiros de P&D. Sempre preocupado com análise de dados e experiência do usuário em busca da melhoria na produtividade.
						</p> 
					</div> 
				</div> 
			</section> 
			<section class="section"> 
				<div class="box-main"> 
					<div class="secondHalf"> 
						<h1 class="text-big" id="program"> 
            Desenvolvimento e manutenção de software e sistemas de automação.
 
						</h1> 
						<p class="text-small"> 
            Desenvolvimento de um sistema de controle de umidade e temperatura em câmaras climatizadas utilizando controle PID e transmissão via RS485 para a interface do usuário, avaliado em 400 mil reais caso fosse feito por uma empresa externa. O projeto foi posteriormente replicado em outras câmaras no laboratório.
            Retrofit de um programa em Labview desenvolvendo uma interface moderna e intuitiva, simplificando os processos para o usuário e reestruturando a base de dados com mais de 8000 ensaios.
            Gestão e desenvolvimento de um projeto de criação de uma Home Page em ASP incluíndo diversas funcionalidades novas como atendimento ao cliente, 
            acesso a treinamentos internos e normas. Além disso, outras ferramentas que já existiam foram melhoradas como o controle de acervos com AJAX com mais de 20 mil itens disponíveis e a página de solicitações utilizada por todo o laboratório e pela área de engenharia, melhorando assim o fluxo de trabalho e a experiência dos usuários.
						</p> 
					</div> 
				</div> 
			</section> 
			<section class="section"> 
				<div class="box-main"> 
					<div class="secondHalf"> 
						<h1 class="text-big" id="program"> 
              Warthog Robotics
						</h1> 
						<p class="text-small"> 
							Desenvolvimento de uma IA simples para controle de um time de futebol de robôs.
              Participação na RoboCore Winter Challenge 14º edição.
						</p> 
					</div> 
				</div> 
			</section> 
			<section class="section"> 
				<div class="box-main"> 
					<div class="secondHalf"> 
						<h1 class="text-big" id="program"> 
            Ramo Estudantil IEEE São Carlos
						</h1> 
						<p class="text-small"> 
            Minicursos e aulas de Python e Inteligência artificial para alunos do grupo e abertos para a universidade.
            Idealização e gestão de uma semana de minicursos voltados para o desenvolvimento técnico e pessoal.
            Desenvolvimento de um projeto de criação de jogos e IAs que foi utilizado para divulgação do grupo em anos posteriores.
						</p> 
					</div> 
				</div> 
			</section> 
			<footer className="footer"> 
				<p className="text-footer"> 
					Copyright ©-All rights are reserved 
				</p> 
			</footer> 
		</div> 
	) 
} 

export default App 
