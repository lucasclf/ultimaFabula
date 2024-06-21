# CHANGELOG

## [1.0.0] | 2024-06-06
### Changed
- Reiniciado o sistema, para se adequar ao FoundryVtt 11;
### BugFinded
- #select não está funcionando para alterar os atributos do personagem em actor-character-sheet.hbs;

## [1.0.1] | 2024-06-10
### Fixed
- #select arrumado, graças ao auxilio de @souowendel do discord do FoundryVTT Brasil;
### Changed
- Melhorada a leitura do getData do jogador;
### Added
- Inserida as condições no dataModel do jogador;
- Inserido a lógica de alteração dos atributos com base nas condições;
- Criada lógica dos recursos e proficiências do jogador;
- Inserção dos checkbox de condição funcionais na ficha;

## [1.0.2] | 2024-06-14
### Added
- Inserção da lógica dos icones de condições ao lado dos atributos;
- Icones de dano elemental inseridos no sistema;
- Finalizada lógica das resistências elementais;
- Iniciada lógica das classes;
- Criada lógica para separar as classes pelo lvl;
- Melhoria na visualização das classes na página de classes;
- Finalizada lógica das jobs;
### Changed
- Correção do changelog;
## [1.0.3] | 2024-06-18
### Added
- Iniciada lógica de recuperação das proficiências marciais;
- Inserido os icones de proficiência na tela de atributos;
- Terminada ficha da arma;
- Adcionada lógica de equipar e desequipar armas;
### Changed
- Iniciada migração das jobs para item;
- Alterada lógica dos recursos vindo do job(item);
## [1.0.4] | 2024-06-XX
### Added
- Fichas de Escudo, Acessorio e Armadura criadas;
- Iniciado a ficha de habilidades;
### Changed
- Refatorada a classe gearHelper para melhor legibilidade;
- Criado as flags de preferência do usuário(jobTab e gearTab);
- Segregada as jobs por abas;