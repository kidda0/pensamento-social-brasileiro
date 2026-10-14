// Conteúdo do site. Para atualizar o guia, edite este arquivo (pelo próprio GitHub, no ícone de lápis).
// Cada período tem "blocos": C = contexto, T = temas (lista), A = autores/leituras (lista), N = destaque.
// Em listas, cada linha é um item; o texto antes dos dois-pontos aparece em negrito.
const SITE={
  title:"Guia de estudos do pensamento social brasileiro",
  lead:"Cada período combina contexto histórico, temas e debates, e autores e leituras de referência. A parte 2 mostra como o próprio campo estuda, organiza e revisa essa tradição. Clique em um período para abrir.",
  note:"Uma ressalva: essas divisões são didáticas. Os períodos se sobrepõem, e autores de uma mesma época podem ter projetos intelectuais bastante diferentes.",
  rodape:"Guia organizado por [SEU NOME]. Material de estudo em construção: confira as referências nas obras originais antes de citar. Licença do conteúdo: [ESCOLHA UMA LICENÇA, por exemplo CC BY 4.0]."
};
const B=(h,t,v)=>({h,t,v}),P=(part,span,name,blocks)=>({part,span,name,blocks});
const C=(v)=>B("Contexto histórico","text",v),T=(v)=>B("Temas e problemas","list",v),A=(v,h)=>B(h||"Autores e referências","list",v),N=(v,h)=>B(h||"","note",v);
const ERAS=[
P(1,"1500–1822","Período colonial e formação da sociedade escravista",[
C(`Colonização portuguesa, exploração econômica, escravização de povos indígenas e africanos, expansão da economia açucareira e mineradora e formação de hierarquias sociais coloniais.`),
T(`Como descrever o território e as populações?
Como se organizavam a economia colonial e a escravidão?
Como a colonização justificava as relações de dominação?`),
A(`Pero de Magalhães Gândavo: descrições da colônia portuguesa.
André João Antonil: Cultura e opulência do Brasil (1711), sobre atividades econômicas e escravidão.
Gabriel Soares de Sousa: descrições da terra e da sociedade colonial.`,"Autores e referências para conhecer"),
N(`Nesta etapa, ainda não temos um campo de Ciências Sociais constituído. São escritos que ajudam a entender as formas históricas de representar e justificar a sociedade colonial.`)]),
P(1,"1822–1888","Independência, Estado nacional e escravidão",[
C(`Independência em 1822, construção do Estado imperial, manutenção da escravidão, expansão da economia cafeeira e crescimento das disputas abolicionistas.`),
T(`Como construir uma nação politicamente independente?
Como conciliar a ideia de nação com a escravidão?
Como reorganizar a sociedade após a abolição?`),
A(`José Bonifácio de Andrada e Silva: projetos para a construção nacional e propostas de abolição gradual.
Francisco Adolfo de Varnhagen: história nacional e formação do Estado.
Joaquim Nabuco: O abolicionismo (1883).
André Rebouças: abolição, reforma agrária e transformação social.
José do Patrocínio: imprensa e movimento abolicionista.`),
N(`A questão nacional ganha centralidade, mas a própria ideia de nação é atravessada por contradições: a independência política não significou o fim da escravidão nem a universalização da cidadania.`)]),
P(1,"Fim do século XIX–1930","Raça, identidade nacional e modernização",[
C(`Abolição em 1888, proclamação da República em 1889, imigração, transformações do trabalho, urbanização inicial e influência do positivismo, evolucionismo e racismo científico europeu.`),
T(`O que explicaria a formação social brasileira?
Como interpretar a miscigenação e as diferenças raciais?
Por que o Brasil parecia distante dos modelos europeus de modernidade?
Qual deveria ser o papel do Estado na construção nacional?`),
A(`Sílvio Romero: cultura brasileira, literatura, raça e mestiçagem.
Euclides da Cunha: Os Sertões (1902), sertão, conflito social e formação nacional.
Nina Rodrigues: raça, medicina legal e criminologia, com pressupostos raciais hoje criticados.
Alberto Torres: organização nacional e crítica à imitação de modelos estrangeiros.
Oliveira Vianna: Populações meridionais do Brasil (1920), organização social e pensamento político autoritário.`),
N(`Atenção: esses autores não defendiam todos as mesmas ideias. O que os aproxima é o esforço de interpretar a sociedade brasileira num contexto em que teorias raciais e evolucionistas tinham grande influência. Essas perspectivas seriam posteriormente criticadas e revistas.`)]),
P(1,"1930–1945","Os intérpretes clássicos do Brasil",[
C(`Revolução de 1930, crise da Primeira República, centralização do Estado, industrialização e urbanização, além de mudanças na organização do trabalho e da política.

A década de 1930 é especialmente importante porque aparecem obras que procuram explicar a formação histórica brasileira de maneira abrangente.`),
T(`Como o passado colonial estrutura o presente?
Como a escravidão, a família, a economia e a cultura moldaram a sociedade?
Quais são as bases históricas da organização política brasileira?
Como pensar a modernização e a identidade nacional?`),
A(`Gilberto Freyre: Casa-Grande & Senzala (1933). Interpreta a formação da sociedade patriarcal e escravista, enfatizando família, relações raciais, cultura e vida privada. Sua interpretação da miscigenação e das relações raciais é objeto de debates e críticas.
Sérgio Buarque de Holanda: Raízes do Brasil (1936). Investiga heranças da colonização portuguesa, relações entre público e privado e formas de sociabilidade e organização política.
Caio Prado Júnior: Formação do Brasil Contemporâneo (1942). Interpreta a colonização a partir de sua organização econômica e de sua inserção no mercado mundial.`,"Autores e leituras fundamentais"),
N(`Como a formação colonial ajuda a explicar a sociedade brasileira contemporânea?`,"Questão central")]),
P(1,"1930–1960","Institucionalização das Ciências Sociais",[
C(`Criação e consolidação de instituições universitárias e de pesquisa, incluindo a Universidade de São Paulo (USP), fundada em 1934, e a Escola Livre de Sociologia e Política, criada em 1933. A partir de meados do século, a Universidade do Brasil e outras instituições também participam da expansão das Ciências Sociais.

A produção intelectual passa gradualmente a conviver com novas formas de profissionalização: pesquisa empírica, formação universitária, especialização disciplinar e diálogo sistemático com teorias internacionais.`),
T(`Como estudar cientificamente a sociedade brasileira?
Como articular teoria sociológica e pesquisa empírica?
Como explicar classes sociais, relações raciais e mudança social?
Qual é a relação entre conhecimento científico e transformação política?`),
A(`Florestan Fernandes: relações raciais, classes sociais e mudança social.
Roger Bastide: religiões afro-brasileiras, cultura e relações raciais.
Antonio Candido: literatura e sociedade, formação da literatura brasileira.
Guerreiro Ramos: sociologia crítica, questão racial e dependência intelectual.
Maria Isaura Pereira de Queiroz: messianismo, movimentos sociais, poder local e ação coletiva.
Darcy Ribeiro: formação dos povos brasileiros e educação.`),
A(`USP e a chamada Escola Sociológica Paulista.
Escola Livre de Sociologia e Política.
Instituto Superior de Estudos Brasileiros (ISEB), criado em 1955, com debates sobre desenvolvimento, nacionalismo e transformação social.`,"Instituições e espaços importantes"),
N(`É importante não tratar esses espaços como uma escola homogênea. Havia diferenças teóricas, metodológicas e políticas significativas entre seus pesquisadores.`)]),
P(1,"1950–1970","Desenvolvimento, dependência e transformação social",[
C(`Industrialização acelerada, debates sobre desenvolvimento nacional, Guerra Fria, golpe de 1964, ditadura militar e expansão do capitalismo brasileiro em articulação com a economia internacional.`),
T(`O que significa desenvolvimento e quem se beneficia dele?
O capitalismo brasileiro reproduz ou transforma as estruturas herdadas?
Como se articulam burguesia, Estado e classes trabalhadoras?
Por que modernização econômica e autoritarismo podem coexistir?
Qual é a posição do Brasil na economia mundial?`),
A(`Celso Furtado: Formação Econômica do Brasil (1959), desenvolvimento e estruturas econômicas.
Florestan Fernandes: A Revolução Burguesa no Brasil (1975), capitalismo dependente e dominação burguesa.
Octavio Ianni: O colapso do populismo no Brasil (1968), populismo, Estado e classes sociais.
Fernando Henrique Cardoso e Enzo Faletto: Dependência e Desenvolvimento na América Latina (1969).
Ruy Mauro Marini: Dialética da dependência (1973).
Darcy Ribeiro: O povo brasileiro foi publicado em 1995, reunindo uma longa trajetória de reflexão sobre formação étnica e cultural.
Raymundo Faoro: Os donos do poder, cuja primeira edição é de 1958, sobre Estado, estamento e poder político.
Maria Sylvia de Carvalho Franco: Homens livres na ordem escravocrata (1969), sobre os homens livres pobres e as relações de dependência e poder pessoal na sociedade escravista do Vale do Paraíba.`,"Autores e leituras"),
N(`Esses autores não constituem uma única corrente. A teoria da dependência, o marxismo de Florestan, a interpretação econômica de Furtado e a análise de Faoro possuem diferenças relevantes.`)]),
P(1,"1964–1988","Ditadura, autoritarismo e democracia",[
C(`O golpe de 1964, a repressão política, a censura, as transformações econômicas da ditadura e, posteriormente, a abertura política e a mobilização pela redemocratização.`),
T(`Como explicar a consolidação do autoritarismo?
Quais são os limites da democracia brasileira?
Como se organizam as classes trabalhadoras e os movimentos sociais?
Como Estado e sociedade se relacionam?
Como construir uma democracia para além das instituições formais?`),
A(`Florestan Fernandes: autocracia burguesa e capitalismo dependente.
Octavio Ianni: Estado, classes sociais e capitalismo.
Francisco Weffort: populismo, trabalhadores e democracia.
Raymundo Faoro: Estado, estamento e poder.
Marilena Chaui: ideologia, autoritarismo e cultura política.
Lélia Gonzalez: racismo, sexismo e sociedade brasileira.
Abdias Nascimento: racismo, cultura afro-brasileira e crítica à democracia racial.`),
N(`Os debates desse período atravessam diferentes tradições e continuam importantes para compreender a relação entre modernização, autoritarismo e democracia.`)]),
P(1,"1985–2000","Redemocratização e revisão das interpretações do Brasil",[
C(`Fim da ditadura, Constituição de 1988, reorganização dos movimentos sociais, expansão dos debates sobre cidadania e permanência de desigualdades sociais e raciais.`),
T(`A democracia política é suficiente para superar as desigualdades?
Como interpretar a persistência do racismo após a abolição?
Como incorporar gênero e raça às explicações da sociedade brasileira?
Como movimentos sociais produzem conhecimento e transformam a política?`),
A(`Lélia Gonzalez: racismo, sexismo, cultura e amefricanidade.
Beatriz Nascimento: quilombos, memória, território e identidade negra.
Abdias Nascimento: O genocídio do negro brasileiro (1978).
Carlos Hasenbalg: Discriminação e desigualdades raciais no Brasil (1979).
Sueli Carneiro: pensamento feminista negro e crítica ao racismo.
José Murilo de Carvalho: Os bestializados (1987), cidadania e República.
Luiz Werneck Vianna: pensamento político brasileiro, Estado e democracia.`),
N(`Essa etapa não representa o início da reflexão sobre raça e gênero. Intelectuais negros e feministas já produziam análises fundamentais antes disso. Trata-se também de uma ampliação de sua presença e reconhecimento no debate acadêmico.`)]),
P(1,"2000–hoje","Pluralização do campo e novas agendas",[
C(`Expansão das universidades, políticas de ação afirmativa, fortalecimento de movimentos negros e feministas, debates sobre colonialidade e circulação transnacional de ideias, além de novas disputas sobre democracia e desigualdade.`),
T(`Quem integra o cânone do pensamento social brasileiro?
Como reler criticamente os autores clássicos?
Como ideias circulam entre Brasil, América Latina, África, Europa e Estados Unidos?
Como raça, gênero, classe e território se articulam?
Como as interpretações do Brasil participam da vida política e social?`),
A(`Clóvis Moura: escravidão, quilombagem, racismo e luta de classes.
Lélia Gonzalez e Beatriz Nascimento: referências centrais para revisões do pensamento social negro.
Sueli Carneiro: racismo, feminismo negro e produção do conhecimento.
Djamila Ribeiro: feminismo negro e lugar de fala.
André Botelho: sociologia política, pensamento social brasileiro e relações entre texto e contexto.
Bernardo Ricupero: linhagens do pensamento político, interpretações do Brasil e circulação de ideias.
Maria Arminda do Nascimento Arruda: intelectuais, instituições e sociologia da cultura.
Lilia Schwarcz: história social, raça, escravidão e representações nacionais.
Luiz Werneck Vianna: pensamento político, Estado e democracia.`),
N(`Essa fase não é uma ruptura completa com o passado. É também uma releitura de autores, conceitos e tradições já existentes, com disputas sobre quais experiências e perspectivas devem ocupar lugar central na interpretação do Brasil.`)]),
P(2,"Introdução","Como o campo estuda o próprio pensamento social brasileiro?",[
B("","text",`Esta parte é fundamental para não ficar apenas numa lista de autores. O pensamento social brasileiro é também um campo de pesquisa que investiga como as interpretações do país são produzidas, organizadas, difundidas e retomadas.`)]),
P(2,"Caminho 1","Texto e contexto",[
B("","text",`Como interpretar uma obra considerando sua linguagem, seus argumentos, as condições históricas de produção e os debates intelectuais em que interveio? A questão é evitar tanto reduzir o texto ao contexto quanto ler a obra como se estivesse isolada da sociedade.`),
A(`André Botelho
Maurício Hoelz
Quentin Skinner
J. G. A. Pocock
Antonio Candido`,"Referências")]),
P(2,"Caminho 2","Linhagens e tradições de interpretação",[
B("","text",`Em vez de organizar os autores apenas por data, investiga-se como certas formas de pensar a política e a sociedade reaparecem, se transformam e entram em disputa ao longo do tempo.`),
A(`Gildo Marçal Brandão: Linhagens do pensamento político brasileiro.`,"Referência central")]),
P(2,"Caminho 3","Sequências, regularidades e circulação de ideias",[
B("","text",`Como problemas persistem entre diferentes autores? Como ideias são apropriadas, modificadas e utilizadas em novos contextos? Aqui, o foco não é apenas identificar uma escola, mas reconstruir relações, deslocamentos e continuidades.`),
A(`André Botelho: em seus estudos sobre sequências.
Sergio Tavolaro: em sua abordagem das regularidades na dispersão.
Gildo Marçal Brandão: com as linhagens.`,"Referências")]),
P(2,"Leituras","Leituras para compreender o campo",[
A(`André Botelho: O retorno da sociedade: política e interpretações do Brasil.
Gildo Marçal Brandão: Linhagens do pensamento político brasileiro.
Bernardo Ricupero: Caio Prado Jr. e a nacionalização do marxismo no Brasil.
Maria Arminda do Nascimento Arruda: estudos sobre intelectuais, instituições e sociologia da cultura.
Lilia Schwarcz: estudos sobre pensamento racial, escravidão e construção da identidade nacional.
Luiz Werneck Vianna: estudos sobre pensamento político, Estado e democracia.`,"Por onde começar"),
N(`O artigo de Lucas Trindade, “Linhagens, sequências, regularidades: aventuras no pensamento social e político brasileiro” (2025), é especialmente útil para comparar os projetos de Gildo Marçal Brandão, André Botelho e Sergio Tavolaro.`)])
];
