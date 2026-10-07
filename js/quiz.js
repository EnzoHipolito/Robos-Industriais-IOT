const DADOS_QUIZ = [
  {
    id: 1,
    categoria: "banco-dados",
    categoriaNome: "Banco de Dados",
    competencia: "Modelagem de Dados para Persistência em Sistemas IoT",
    enunciado: "Durante a implantação de uma plataforma de Indústria 4.0 em uma linha de manufatura automatizada, a equipe de Desenvolvimento de Sistemas ficou responsável por planejar a persistência dos dados de telemetria dos robôs e leituras de sensores ambientais. Na primeira reunião de alinhamento com os especialistas de automação, o analista sênior solicitou a elaboração de um diagrama esquemático inicial que mapeasse apenas as entidades de negócio (como <em>Robo</em>, <em>Sensor</em> e <em>Leitura</em>), seus respectivos atributos essenciais e as regras de relacionamento (cardinalidade 1:N), sem envolver sintaxe de comandos SQL, tipos primitivos específicos de SGBD (como BIGINT, VARCHAR) ou parâmetros de indexação e armazenamento em disco.",
    comando: "Considerando o ciclo clássico de modelagem de dados, o artefato solicitado pelo analista sênior corresponde ao:",
    imagem: null,
    codigo: null,
    opcoes: [
      {
        letra: "A",
        texto: "Modelo Lógico, pois organiza os dados em tabelas relacionais com chaves primárias e regras de integridade referencial, sendo apenas independente do hardware do servidor.",
        correta: false
      },
      {
        letra: "B",
        texto: "Modelo Conceitual, pois prioriza o entendimento do negócio e a visão abstrata do domínio, representando entidades e relacionamentos de forma independente de qualquer Sistema Gerenciador de Banco de Dados (SGBD) ou tecnologia de implementação.",
        correta: true
      },
      {
        letra: "C",
        texto: "Modelo Físico, pois define a estrutura das tabelas temporárias e os buffers de memória que receberão os fluxos contínuos de telemetria dos microcontroladores.",
        correta: false
      },
      {
        letra: "D",
        texto: "Modelo Operacional de Dados, cuja finalidade específica é definir as rotas da API REST que trafegam os pacotes JSON até o banco de dados.",
        correta: false
      }
    ],
    justificativaCorreta: "O <strong>Modelo Conceitual</strong> (frequentemente expresso pelo Diagrama Entidade-Relacionamento - DER) é a etapa de maior nível de abstração. Ele captura a semântica do negócio com foco nos conceitos (entidades, atributos e relacionamentos), sem qualquer vínculo com SGBDs específicos (PostgreSQL, MySQL, Oracle) ou detalhes de implementação física.",
    distratores: [
      {
        letra: "A",
        gatilho: "Confundir Modelo Lógico com Modelo Conceitual.",
        explicacao: "O modelo lógico já define a estrutura relacional concreta com chaves primárias (PK), chaves estrangeiras (FK), tipos lógicos de campos e normalização (1FN, 2FN, 3FN), estando um degrau abaixo em abstração em relação ao conceitual."
      },
      {
        letra: "C",
        gatilho: "Associar telemetria em tempo real diretamente a armazenamento físico.",
        explicacao: "O modelo físico lida com scripts DDL, comandos CREATE TABLE específicos de um SGBD, definições de índices, particionamento e arquivos em disco (tablespaces)."
      },
      {
        letra: "D",
        gatilho: "Confundir modelagem de banco de dados com arquitetura de transporte/APIs de rede.",
        explicacao: "Rotas de APIs REST e pacotes JSON pertencem à camada de integração de software/redes, não fazendo parte dos três modelos canônicos de banco de dados (Conceitual, Lógico e Físico)."
      }
    ]
  },
  {
    id: 2,
    categoria: "robotica",
    categoriaNome: "Robótica Industrial",
    competencia: "Classificação Cinemática e Seleção de Manipuladores Industriais",
    enunciado: "Uma indústria farmacêutica precisa automatizar a linha de embalagem secundária de frascos de medicamentos. O processo exige que um manipulador instalado sobre a esteira recolha frascos leves que trafegam a uma taxa de 130 unidades por minuto e os insira ordenadamente dentro de caixas de papelão (operação de <em>pick-and-place</em> de alta cadência). O espaço lateral ao redor da esteira é restrito para circulação de operadores, mas há ampla altura vertical para fixação superior no teto da célula.",
    comando: "Analisando as configurações cinemáticas dos robôs industriais estudados no portal, qual modelo de robô é o mais recomendado para essa tarefa e por qual razão técnica?",
    imagem: "img/robo-delta.png",
    imagemAlt: "Robô Delta Paralelo Suspenso",
    codigo: null,
    opcoes: [
      {
        letra: "A",
        texto: "Robô SCARA, pois possui apenas juntas lineares verticais e sua montagem lateral permite alcançar as maiores acelerações da robótica industrial sem ocupar espaço aéreo.",
        correta: false
      },
      {
        letra: "B",
        texto: "Robô Delta (paralelo), pois sua estrutura de braços articulados interligados a uma base superior suspensa mantém os servomotores fixos na estrutura estacionária, conferindo inércia mecânica extremamente baixa ao efetuador e viabilizando ciclos ultrarrápidos de posicionamento.",
        correta: true
      },
      {
        letra: "C",
        texto: "Robô Articulado (antropomórfico) de 6 graus de liberdade, pois o maior número de eixos rotativos diminui a inércia dos motores e garante tempos de ciclo inferiores a qualquer mecanismo paralelo.",
        correta: false
      },
      {
        letra: "D",
        texto: "Robô Cartesiano (gantry), pois a movimentação puramente prismática nos eixos ortogonais X, Y e Z elimina folgas mecânicas e é a única geometria homologada para frequências acima de 120 ciclos por minuto.",
        correta: false
      }
    ],
    justificativaCorreta: "O <strong>Robô Delta</strong> possui cinemática paralela com montagem suspensa em cúpula. Sua principal vantagem é manter todos os servomotores pesados instalados fixos na base superior; os braços móveis são constituídos por hastes finas e leves de fibra de carbono. Isso reduz drasticamente a inércia, permitindo acelerações superiores a 10G e taxas de até 150 a 200 ciclos de <em>pick-and-place</em> por minuto.",
    distratores: [
      {
        letra: "A",
        gatilho: "O robô SCARA é muito comum em montagens eletrônicas, mas não tem a inércia ultrabaixa do Delta para cadências extremas.",
        explicacao: "O SCARA possui cinemática serial de braço horizontal (RRP) e carrega motores nas juntas móveis, além de ser instalado sobre pedestal lateral ou de bancada, exigindo espaço no piso."
      },
      {
        letra: "C",
        gatilho: "Acreditar que quanto mais eixos rotativos o robô tiver, maior será sua velocidade.",
        explicacao: "Robôs antropomórficos de 6 eixos carregam o peso dos próprios motores ao longo dos elos articulados, resultando em grande massa móvel e maior tempo de ciclo do que mecanismos paralelos leves."
      },
      {
        letra: "D",
        gatilho: "O robô Cartesiano é muito preciso e rígido, mas não atinge altíssimas cadências.",
        explicacao: "Estruturas cartesianas possuem vigas e pórticos pesados com grande atrito mecânico, sendo ideais para paletização pesada e usinagem CNC, não para pick-and-place ultrarrápido."
      }
    ]
  },
  {
    id: 3,
    categoria: "sensores",
    categoriaNome: "Sensores",
    competencia: "Identificação, Princípio Físico e Equacionamento de Sensores Ultrassônicos",
    enunciado: "Em uma célula de armazenamento automático, um técnico precisa medir continuamente a distância entre um cabeçote móvel e a superfície de caixas armazenadas em paletes. Para isso, instalou o sensor ilustrado, que opera com quatro pinos (<em>VCC</em>, <em>GND</em>, <em>Trig</em> e <em>Echo</em>). O firmware gera um pulso em nível alto de 10 µs no pino de disparo (<em>Trig</em>), fazendo o transdutor emitir uma rajada acústica ultrassônica de 40 kHz. O pino de resposta (<em>Echo</em>) permanece em nível alto durante 1000 µs (tempo de trânsito do eco refletido pelo obstáculo).",
    comando: "Sabendo que a velocidade do som no ar à temperatura ambiente é de aproximadamente 340 m/s (equivalente a 0,034 cm/µs), qual é a identificação do sensor e a distância calculada até a superfície da caixa?",
    imagem: "img/sensor_HC-SR04.png",
    imagemAlt: "Sensor ultrassônico HC-SR04 com transdutores de emissão e recepção",
    codigo: null,
    opcoes: [
      {
        letra: "A",
        texto: "Sensor óptico de reflexão difusa; distância calculada em 34,0 cm, pois a propagação da onda eletromagnética não sofre divisão temporal.",
        correta: false
      },
      {
        letra: "B",
        texto: "Sensor ultrassônico HC-SR04; distância calculada em 17,0 cm, pois o pulso sonoro realiza a trajetória completa de ida até a caixa e retorno ao receptor.",
        correta: true
      },
      {
        letra: "C",
        texto: "Sensor de proximidade indutivo HC-SR04; distância calculada em 34,0 cm, pois a bobina capta a corrente de Foucault no tempo de subida do sinal.",
        correta: false
      },
      {
        letra: "D",
        texto: "Sensor ultrassônico HC-SR04; distância calculada em 68,0 cm, pois o cálculo deve multiplicar o tempo de voo pela constante de reflexão acústica (2 × 0,034).",
        correta: false
      }
    ],
    justificativaCorreta: "Trata-se do <strong>HC-SR04</strong>, um sensor ultrassônico que opera pelo princípio do <em>tempo de voo</em> (Time of Flight). A onda sonora percorre o caminho de ida (transdutor até o alvo) e de volta (alvo até o receptor). Portanto, a distância é dada por: <code>d = (tempo × velocidade) / 2 = (1000 µs × 0,034 cm/µs) / 2 = 34 / 2 = 17,0 cm</code>.",
    distratores: [
      {
        letra: "A",
        gatilho: "Esquecer a divisão por 2 do percurso de ida e volta, e confundir onda sonora mecânica com óptica.",
        explicacao: "Se não for considerada a divisão por 2 da ida e volta, o valor obtido é 34 cm (o dobro da distância real). Além disso, o HC-SR04 emite ultrassom (onda mecânica), não feixes de luz óptica."
      },
      {
        letra: "C",
        gatilho: "Confundir ultrassom com efeito indutivo de Foucault.",
        explicacao: "Sensores indutivos operam com campos magnéticos de alta frequência e detectam apenas alvos metálicos a distâncias milimétricas (1 a 15 mm), não possuindo pinos Trig/Echo."
      },
      {
        letra: "D",
        gatilho: "Multiplicar por 2 em vez de dividir por 2.",
        explicacao: "A multiplicação por 2 resulta em 68 cm, o que quadruplica a distância física real."
      }
    ]
  },
  {
    id: 4,
    categoria: "sensores",
    categoriaNome: "Sensores",
    competencia: "Condicionamento e Aquisição de Sinais de Sensores Químicos / Ambientais",
    enunciado: "Em uma estação de recarga e manutenção de robôs industriais e baterias de lítio, existe risco de emanação de gases inflamáveis (GLP, metano, hidrogênio) e formação de fumaça por superaquecimento elétrico. A equipe de automação selecionou o módulo sensor ilustrado para compor o nó de telemetria IoT. O sensor possui um elemento aquecedor interno e um transdutor semicondutor à base de dióxido de estanho (SnO<sub>2</sub>), cuja condutividade elétrica aumenta exponencialmente na presença de gases redutores combustíveis. O módulo dispõe de pinos VCC, GND, A0 (saída analógica) e D0 (saída digital com trimpot de calibração).",
    comando: "Para que o sistema IoT não apenas acione um alarme sonoro em caso de emergência, mas também envie continuamente a curva proporcional da concentração de gás para o painel em nuvem da fábrica, como o módulo MQ-2 deve ser integrado ao microcontrolador?",
    imagem: "img/sensor_MQ-2.png",
    imagemAlt: "Módulo Sensor de Gás e Fumaça MQ-2",
    codigo: null,
    opcoes: [
      {
        letra: "A",
        texto: "Utilizar exclusivamente a saída D0 ligada a uma porta digital com interrupção, pois ela fornece a conversão em partes por milhão (PPM) calibrada digitalmente pelo trimpot.",
        correta: false
      },
      {
        letra: "B",
        texto: "Conectar a saída analógica A0 a um pino conversor analógico-digital (ADC) do microcontrolador para mensuração quantitativa contínua, podendo utilizar paralelamente o pino D0 como gatilho digital rápido para acionamento de corte de emergência.",
        correta: true
      },
      {
        letra: "C",
        texto: "Ligar o pino A0 diretamente à porta serial de transmissão (TX) do microcontrolador, pois a camada de SnO2 modula os dados sob o padrão UART a 9600 bps.",
        correta: false
      },
      {
        letra: "D",
        texto: "Alimentar o sensor em 12 V contínuos e conectar o pino D0 ao barramento I2C, dispensando o uso de portas de entrada e saída convencionais.",
        correta: false
      }
    ],
    justificativaCorreta: "O módulo <strong>MQ-2</strong> disponibiliza no pino <strong>A0</strong> uma tensão analógica contínua (0 a 5 V) proporcional à condutividade da cerâmica de SnO<sub>2</sub>, sendo ideal para leitura contínua via pino analógico (ADC) do microcontrolador. O pino <strong>D0</strong> fornece apenas um sinal digital binário (HIGH/LOW) gerado pelo comparador LM393 com base no limiar ajustado no trimpot.",
    distratores: [
      {
        letra: "A",
        gatilho: "Supor que a saída digital D0 transmite a leitura contínua em PPM.",
        explicacao: "O pino D0 é uma saída binária liga/desliga (0 ou 1). Ele não possui nenhum protocolo serial ou valor numérico em PPM para telemetria proporcional."
      },
      {
        letra: "C",
        gatilho: "Confundir tensão analógica contínua com transmissão serial UART (TX/RX).",
        explicacao: "O pino A0 é uma saída de tensão contínua dependente de um divisor resistivo, necessitando obrigatoriamente de conversão analógico-digital (ADC) e não de uma porta serial UART."
      },
      {
        letra: "D",
        gatilho: "Atribuir barramento I2C e tensão excessiva a um sensor de 5V analógico/digital.",
        explicacao: "O sensor MQ-2 convencional não possui barramento I2C nem opera em 12 V; ele opera em 5 V CC para alimentar o filamento aquecedor interno."
      }
    ]
  },
  {
    id: 5,
    categoria: "multimetro",
    categoriaNome: "Multímetro",
    competencia: "Metrologia Elétrica, Configuração de Escalas e Procedimento Seguro de Medição",
    enunciado: "Durante a montagem em bancada de uma placa de interface de um braço robótico, o técnico precisa realizar dois procedimentos de validação elétrica utilizando o multímetro digital ilustrado:<br>• <strong>Medição 1</strong>: Verificar se a tensão na saída da fonte chaveada contínua de 5 V está regulada e estável;<br>• <strong>Medição 2</strong>: Medir a corrente elétrica total contínua consumida pelo circuito em repouso (estimada na ordem de 120 mA).",
    comando: "Considerando as regras fundamentais de instrumentação elétrica, a integridade dos fusíveis do instrumento e a correta configuração dos bornes e escalas, quais são os procedimentos adequados para as Medições 1 e 2, respectivamente?",
    imagem: "img/multimetro-digital.svg",
    imagemAlt: "Diagrama esquemático de Multímetro Digital com seletor e bornes",
    codigo: null,
    opcoes: [
      {
        letra: "A",
        texto: "Medição 1: Pontas conectadas em série com a fonte na escala ACV (V~); Medição 2: Pontas em paralelo com o circuito no borne 10A e seletor na escala V~.",
        correta: false
      },
      {
        letra: "B",
        texto: "Medição 1: Pontas conectadas em paralelo com a fonte na escala de resistência (Ω); Medição 2: Pontas conectadas em série com a carga, com a ponta vermelha no borne 10A e seletor em 200m DCA.",
        correta: false
      },
      {
        letra: "C",
        texto: "Medição 1: Pontas conectadas em paralelo com a saída da fonte (Preta no borne COM e Vermelha no borne VΩmA), com o seletor na escala de tensão contínua DCV (20V V⎓); Medição 2: Circuito desenergizado, linha de alimentação aberta em um ponto e multímetro inserido em série com a carga (Preta no COM, Vermelha no VΩmA), com o seletor na escala DCA (200m A⎓).",
        correta: true
      },
      {
        letra: "D",
        texto: "Medição 1: Pontas conectadas em série na escala DCV (200m); Medição 2: Pontas conectadas em paralelo diretamente nos terminais da fonte chaveada na escala DCA (20m), sem interromper a fiação.",
        correta: false
      }
    ],
    justificativaCorreta: "Para medir <strong>tensão contínua</strong> (Medição 1), o voltímetro possui altíssima impedância interna e deve ser conectado em <strong>paralelo</strong> com a carga/fonte, na escala DCV (V⎓) adequada (20V para medir 5V), com ponta preta no COM e vermelha no VΩmA. Para medir <strong>corrente contínua</strong> (Medição 2), o amperímetro possui resistência quase nula (shunt) e deve ser conectado obrigatoriamente em <strong>série</strong>, abrindo o circuito. Como a corrente esperada é de 120 mA, a escala DCA de 200m no borne VΩmA é a mais precisa e segura.",
    distratores: [
      {
        letra: "A",
        gatilho: "Tentar medir tensão em série e usar escala de tensão alternada (ACV) em fonte contínua.",
        explicacao: "Conectar o voltímetro em série interrompe o funcionamento do circuito devido à altíssima resistência interna do instrumento, e a escala ACV (tensão alternada) lê zero ou gera medidas erradas em fontes contínuas."
      },
      {
        letra: "B",
        gatilho: "Medir resistência em circuito energizado e mismatch de borne 10A com escala 200m.",
        explicacao: "Nunca se mede resistência (Ω) com circuito sob tensão (risco de queima do instrumento). Além disso, inserir a ponta no borne 10A enquanto o seletor está na escala de 200m desvia o circuito do shunt correto."
      },
      {
        letra: "D",
        gatilho: "Ligar o multímetro em modo amperímetro em paralelo com a fonte de alimentação.",
        explicacao: "Este é um erro clássico e perigoso: o amperímetro tem resistência interna quase zero. Ao conectá-lo em paralelo com a fonte, provoca-se um curto-circuito franco que queima o fusível interno do multímetro ou destrói a trilha do equipamento."
      }
    ]
  },
  {
    id: 6,
    categoria: "arduino",
    categoriaNome: "Arduino",
    competencia: "Arquitetura de Microcontroladores, Portas Analógicas e Conversor ADC de 10 bits",
    enunciado: "Um protótipo de braço robótico educacional utiliza uma placa Arduino Uno (microcontrolador ATmega328P, alimentada em 5,0 V). Um potenciômetro de precisão de 10 kΩ está instalado na junta de base rotativa como divisor de tensão para indicar o ângulo do braço. Os terminais extremos do potenciômetro foram ligados ao 5V e ao GND da placa, e o terminal móvel central foi conectado ao pino analógico A0. Ao posicionar a junta exatamente no centro mecânico do seu curso, a tensão lida no pino A0 pelo multímetro é de 2,5 V.",
    comando: "Ao executar a instrução <code>int valorLido = analogRead(A0);</code>, qual valor numérico inteiro será armazenado na variável <code>valorLido</code> e qual a fundamentação técnica para esse resultado?",
    imagem: null,
    codigo: null,
    opcoes: [
      {
        letra: "A",
        texto: "127 ou 128, pois o conversor analógico-digital do Arduino Uno possui resolução de 8 bits (2⁸ = 256 níveis discretos, de 0 a 255).",
        correta: false
      },
      {
        letra: "B",
        texto: "511 ou 512, pois o conversor analógico-digital (ADC) do Arduino Uno possui resolução de 10 bits (2¹⁰ = 1024 níveis discretos, variando de 0 a 1023), mapeando linearmente a faixa de 0,0 V a 5,0 V.",
        correta: true
      },
      {
        letra: "C",
        texto: "1 (HIGH), pois as portas do Arduino interpretam qualquer tensão analógica acima de 2,0 V como nível lógico alto binário.",
        correta: false
      },
      {
        letra: "D",
        texto: "2047 ou 2048, pois o conversor analógico-digital do ATmega328P opera nativamente em 12 bits (2¹² = 4096 níveis discretos, variando de 0 a 4095).",
        correta: false
      }
    ],
    justificativaCorreta: "O microcontrolador ATmega328P do Arduino Uno possui conversor analógico-digital (ADC) com <strong>resolução de 10 bits</strong>. Isso significa que ele divide a tensão de referência de 0 a 5,0 V em 2¹⁰ = 1024 degraus numéricos, variando de 0 (para 0 V) até 1023 (para 5 V). Para uma entrada de 2,5 V (metade de 5 V): <code>valorLido = (2,5 / 5,0) × 1023 ≈ 511,5</code>, resultando em <strong>511 ou 512</strong>.",
    distratores: [
      {
        letra: "A",
        gatilho: "Confundir a resolução de 10 bits do analogRead com a resolução de 8 bits do PWM (analogWrite).",
        explicacao: "O valor 128 corresponde à metade de uma escala de 8 bits (0 a 255), utilizada na saída PWM do comando analogWrite(), não na leitura analógica do ADC do Uno."
      },
      {
        letra: "C",
        gatilho: "Confundir analogRead() com digitalRead().",
        explicacao: "A função digitalRead() retorna apenas 0 ou 1 (LOW ou HIGH). Já a função analogRead() quantiza a tensão contínua em uma faixa numérica inteira de 0 a 1023."
      },
      {
        letra: "D",
        gatilho: "Confundir a resolução do Arduino Uno (10 bits) com a do ESP32 ou Arduino Due (12 bits).",
        explicacao: "ADCs de 12 bits (faixa 0 a 4095, onde a metade é 2047) pertencem a placas como o ESP32 ou microcontroladores ARM Cortex, não ao ATmega328P do Arduino Uno."
      }
    ]
  },
  {
    id: 7,
    categoria: "arduino",
    categoriaNome: "Arduino",
    competencia: "Portas Digitais, Modulação por Largura de Pulso (PWM) e Função analogWrite",
    enunciado: "Para regular a velocidade de uma esteira transportadora acionada por um motor DC através de um driver de potência, um técnico conectou o pino de controle do driver a uma porta digital do Arduino Uno. No código, o programador utilizou o pino digital 7 e inseriu a instrução:<br><code>analogWrite(7, 128);</code><br>com o objetivo de produzir uma tensão média proporcional de 2,5 V (duty cycle de 50%). Contudo, ao testar a bancada, o motor operou de forma imprevisível: ligava em potência máxima ou permanecia desligado, sem controle contínuo de rotação.",
    comando: "Qual é o motivo técnico do problema e qual a correção adequada no circuito e no firmware do Arduino Uno?",
    imagem: null,
    codigo: null,
    opcoes: [
      {
        letra: "A",
        texto: "O Arduino Uno não possui suporte à função analogWrite(); para modular cargas DC é mandatório instalar um conversor DAC externo via barramento SPI.",
        correta: false
      },
      {
        letra: "B",
        texto: "O pino digital 7 do Arduino Uno não dispõe de canal de modulação por largura de pulso (PWM) por hardware; para modular o duty cycle, deve-se mover a conexão para um pino PWM marcado com til ~ (como os pinos 3, 5, 6, 9, 10 ou 11) mantendo a instrução analogWrite().",
        correta: true
      },
      {
        letra: "C",
        texto: "O comando analogWrite() aceita apenas parâmetros na faixa de 0 a 1023; ao passar o valor 128, o registrador sofreu um subdimensionamento de escala, provocando erro de execução.",
        correta: false
      },
      {
        letra: "D",
        texto: "As portas digitais não suportam sinais de saída modulados; o driver deveria ter sido conectado obrigatoriamente a uma das portas analógicas A0 a A5 com o comando analogWrite(A0, 128).",
        correta: false
      }
    ],
    justificativaCorreta: "No Arduino Uno, o comando <code>analogWrite()</code> gera um sinal de onda quadrada com <strong>modulação por largura de pulso (PWM)</strong> de 8 bits (valores de 0 a 255). Esse recurso só funciona nos pinos digitais que possuem temporizadores (timers) conectados aos pinos de saída PWM, identificados na placa pelo símbolo de til <code>~</code> (<strong>pinos 3, 5, 6, 9, 10 e 11</strong>). O pino 7 é um GPIO digital puramente binário (on/off); nele, o analogWrite se comporta de forma não modulada (valores abaixo de 128 geram LOW e acima ou iguais a 128 geram HIGH).",
    distratores: [
      {
        letra: "A",
        gatilho: "Acreditar que o Arduino Uno necessita de DAC externo para efetuar modulação de velocidade.",
        explicacao: "O controle de motores DC e iluminação não exige tensão analógica pura; a modulação PWM de hardware do Arduino emula a tensão média perfeitamente na frequência dos timers."
      },
      {
        letra: "C",
        gatilho: "Inverter a escala de 8 bits do analogWrite (0 a 255) com a de 10 bits do analogRead (0 a 1023).",
        explicacao: "O analogWrite opera estritamente em 8 bits (0 a 255). O valor 128 representa exatamente 50% de duty cycle."
      },
      {
        letra: "D",
        gatilho: "Supor erroneamente que os pinos A0 a A5 são saídas analógicas.",
        explicacao: "Os pinos A0 a A5 são entradas do conversor ADC. Eles não geram saída analógica modulada PWM nativa com analogWrite()."
      }
    ]
  },
  {
    id: 8,
    categoria: "esp",
    categoriaNome: "ESP (ESP8266/ESP32)",
    competencia: "Microcontroladores Conectados para IIoT, Arquitetura e Rádios Integrados",
    enunciado: "Uma equipe de automação industrial está projetando um nó sensor inteligente para monitorar temperatura (sensor DS18B20), vibração e corrente de motores de robôs industriais. O dispositivo precisa atender simultaneamente aos seguintes requisitos de projeto:<br>1. Conectar-se à rede corporativa via Wi-Fi (802.11b/g/n) e publicar telemetrias em um broker MQTT local;<br>2. Conectar-se via Bluetooth Low Energy (BLE) a crachás de operadores para registrar qual técnico realizou a intervenção mecânica;<br>3. Executar o processamento de filtragem de sinais e a pilha de rede Wi-Fi/MQTT em núcleos de processamento distintos, utilizando o sistema operacional de tempo real FreeRTOS;<br>4. Operar nativamente com nível lógico de 3,3 V nos seus pinos de entrada e saída (GPIO).",
    comando: "Considerando as tecnologias de microcontroladores para IoT disponíveis no mercado e discutidas no portal, qual plataforma atende de forma nativa e integrada a todas essas exigências?",
    imagem: null,
    codigo: null,
    opcoes: [
      {
        letra: "A",
        texto: "ESP8266 (NodeMCU), pois possui arquitetura dual-core Xtensa LX106 com rádios integrados Wi-Fi e Bluetooth 4.2 BLE de alta potência.",
        correta: false
      },
      {
        letra: "B",
        texto: "ESP32, pois conta com microprocessador dual-core de 32 bits (Xtensa LX6/LX7), rádio integrado com suporte simultâneo a Wi-Fi e Bluetooth (Classic e BLE), suporte nativo a FreeRTOS com alocação em múltiplos núcleos e operação em nível lógico de 3,3 V.",
        correta: true
      },
      {
        letra: "C",
        texto: "Arduino Uno Rev3, pois através do seu microcontrolador ATmega328P dual-core de 16 MHz suporta conectividade sem fio multiprotocolo e multithreading nativo.",
        correta: false
      },
      {
        letra: "D",
        texto: "Módulo conversor TTL-RS485, pois seus canais diferenciais de tensão dispensam o uso de microcontroladores e roteiam pacotes MQTT diretamente para a nuvem.",
        correta: false
      }
    ],
    justificativaCorreta: "O <strong>ESP32</strong> é o microcontrolador de referência para projetos modernos de IIoT que exigem alta performance. Ele possui processador <strong>dual-core de 32 bits</strong> (núcleos PRO_CPU e APP_CPU operando a até 240 MHz), conectividade integrada <strong>Wi-Fi e Bluetooth (Classic e BLE)</strong>, periféricos ricos (múltiplos canais ADC de 12 bits, DACs, barramento I2C, SPI), nível lógico de 3,3 V e integração nativa com o FreeRTOS.",
    distratores: [
      {
        letra: "A",
        gatilho: "Confundir as especificações limitadas do ESP8266 com o ESP32.",
        explicacao: "O ESP8266 é um chip anterior com apenas 1 núcleo (single-core), que possui apenas rádio Wi-Fi (NÃO possui Bluetooth nem BLE) e possui apenas 1 pino ADC com limite de 1,0 V."
      },
      {
        letra: "C",
        gatilho: "Superestimar as capacidades do Arduino Uno clássico.",
        explicacao: "O Arduino Uno é baseado no chip ATmega328P de 8 bits, single-core, que opera em 5V e não possui qualquer conectividade sem fio (nem Wi-Fi nem Bluetooth) na placa padrão."
      },
      {
        letra: "D",
        gatilho: "Confundir um transceptor de camada física (RS-485) com um microcontrolador autônomo.",
        explicacao: "O RS485 é apenas um padrão físico serial balanceado para longas distâncias (usado em Modbus industrial); ele não possui processador, nem memória e nem executa pilha MQTT."
      }
    ]
  },
  {
    id: 9,
    categoria: "programacao",
    categoriaNome: "Programação / Código",
    competencia: "Análise de Código C++/Arduino, Diagnóstico de Falhas de Configuração e Correção de E/S",
    enunciado: "Em uma bancada de testes de uma esteira robotizada, um técnico instalou um botão mecânico de acionamento manual (com resistor externo de pull-down ligado ao pino 8) e uma lâmpada piloto de sinalização (LED conectado ao pino 12 com resistor de proteção). Ao carregar o programa abaixo na placa controladora, o operador percebeu que, mesmo ao pressionar o botão com firmeza, a lâmpada de sinalização não acendia:",
    comando: "Após inspecionar as conexões elétricas e verificar que a fiação está perfeita e sem mau contato, o técnico abriu o código-fonte para depuração. Qual é o erro presente no código e qual a intervenção técnica necessária para solucioná-lo?",
    imagem: null,
    codigo: `const int PINO_BOTAO = 8;
const int PINO_LED = 12;

void setup() {
  pinMode(PINO_BOTAO, OUTPUT); // Linha 5
  pinMode(PINO_LED, INPUT);    // Linha 6
}

void loop() {
  int estadoBotao = digitalRead(PINO_BOTAO);
  
  if (estadoBotao == HIGH) {
    digitalWrite(PINO_LED, HIGH);
  } else {
    digitalWrite(PINO_LED, LOW);
  }
}`,
    opcoes: [
      {
        letra: "A",
        texto: "O operador condicional == na comparação if (estadoBotao == HIGH) é inválido na linguagem C/C++, devendo ser substituído pelo operador de atribuição simples =.",
        correta: false
      },
      {
        letra: "B",
        texto: "As diretivas de configuração dos pinos na função setup() foram invertidas: o PINO_BOTAO deve ser configurado como INPUT para ler o sinal elétrico externo, e o PINO_LED deve ser configurado como OUTPUT para fornecer corrente ao atuador luminoso.",
        correta: true
      },
      {
        letra: "C",
        texto: "A função digitalRead() só funciona em pinos analógicos; portanto, as constantes PINO_BOTAO e PINO_LED deveriam estar obrigatoriamente vinculadas aos pinos A0 e A1.",
        correta: false
      },
      {
        letra: "D",
        texto: "O laço loop() trava imediatamente porque a leitura de uma entrada digital exige a chamada prévia do método Serial.begin(9600); no setup().",
        correta: false
      }
    ],
    justificativaCorreta: "O erro clássico está nas linhas 5 e 6 do <code>setup()</code>: o botão é um sensor/dispositivo de entrada e deve ser configurado como <strong>INPUT</strong> (<code>pinMode(PINO_BOTAO, INPUT);</code>) para ler o nível de tensão do circuito. O LED é um atuador/dispositivo de saída e deve ser configurado como <strong>OUTPUT</strong> (<code>pinMode(PINO_LED, OUTPUT);</code>) para acionar os transistores internos que fornecem corrente à lâmpada.",
    distratores: [
      {
        letra: "A",
        gatilho: "Confundir o operador de comparação lógica (==) com atribuição (=).",
        explicacao: "Em C/C++, a comparação de igualdade utiliza exatamente dois sinais de igual (==). Trocar por = realizaria uma atribuição (forçando estadoBotao = HIGH), o que seria um erro sintático e lógico grave."
      },
      {
        letra: "C",
        gatilho: "Achar que digitalRead() pertence a portas analógicas.",
        explicacao: "A função digitalRead() é desenhada primordialmente para portas digitais comuns (GPIOs 0 a 13)."
      },
      {
        letra: "D",
        gatilho: "Achar que comunicação serial UART é pré-requisito para acionar pinos digitais.",
        explicacao: "A inicialização Serial.begin() só é necessária se houver envio de mensagens pela porta serial para o computador; ela não interfere nas instruções de GPIO."
      }
    ]
  },
  {
    id: 10,
    categoria: "programacao",
    categoriaNome: "Programação / Código",
    competencia: "Interpretação de Algoritmos, Funções de Mapeamento Matemático e Restrição de Escala",
    enunciado: "No monitoramento automatizado do solo de uma estufa agrícola, a equipe de TI implementou uma rotina em C++ para calibrar um sensor capacitivo de umidade. Em testes de laboratório, verificou-se que a leitura bruta do conversor analógico-digital (ADC) de 12 bits fornece o valor 3200 quando a sonda está totalmente seca (ar livre) e 1300 quando a sonda está imersa em água pura. Como a leitura bruta é <strong>inversamente proporcional</strong> à umidade real, foi escrita a seguinte função de condicionamento:<br>Durante um dia de forte adubação química líquida com alta condutividade iônica, a leitura bruta do conversor analógico-digital atingiu o valor atípico de <strong>1100</strong> (valor inferior à calibração de água pura).",
    comando: "Considerando a execução estrita da função com a entrada valorBruto = 1100, qual valor inteiro será retornado pela função e qual foi o efeito prático da instrução constrain()?",
    imagem: null,
    codigo: `int calcularUmidadePercentual(int pinoSensor) {
  int valorBruto = analogRead(pinoSensor);
  // Mapeia da faixa bruta invertida para a porcentagem de 0 a 100%
  int porcentagem = map(valorBruto, 3200, 1300, 0, 100);
  // Aplica restricao de limites
  return constrain(porcentagem, 0, 100);
}`,
    opcoes: [
      {
        letra: "A",
        texto: "Retornará 0, pois leituras abaixo de 1300 provocam erro de estouro de pilha (stack overflow) e cancelam a execução da função.",
        correta: false
      },
      {
        letra: "B",
        texto: "Retornará aproximadamente 110, pois a função map() realiza interpolação linear contínua e a função constrain() apenas arredonda valores com casas decimais.",
        correta: false
      },
      {
        letra: "C",
        texto: "Retornará 100, pois a função map() extrapolou a escala para cerca de 110%, mas a função constrain(porcentagem, 0, 100) limitou o resultado superior ao teto máximo de 100%, impedindo valores incoerentes no sistema de controle.",
        correta: true
      },
      {
        letra: "D",
        texto: "Retornará -10, pois a sintaxe da função map() foi escrita incorretamente ao posicionar o valor numérico maior (3200) antes do menor (1300).",
        correta: false
      }
    ],
    justificativaCorreta: "A função <code>map(x, in_min, in_max, out_min, out_max)</code> projeta linearmente valores, mas ela não trava os limites: como 3200 mapeia para 0 e 1300 mapeia para 100, para uma entrada de 1100 a equação matemática da reta gera um valor de aproximadamente 110,5%. No entanto, a linha subsequente executa <code>constrain(porcentagem, 0, 100)</code>, cuja função é exatamente saturar qualquer valor menor que 0 em 0 e qualquer valor maior que 100 em 100. Logo, o retorno é <strong>100</strong>.",
    distratores: [
      {
        letra: "A",
        gatilho: "Supor que a função map() lança exceções de underflow ou trava a CPU.",
        explicacao: "A função map() em C++ para microcontroladores é uma simples fórmula matemática: (x - in_min) * (out_max - out_min) / (in_max - in_min) + out_min. Ela não interrompe a CPU nem lança erros."
      },
      {
        letra: "B",
        gatilho: "Ignorar o funcionamento da instrução constrain().",
        explicacao: "Se não houvesse o constrain(), o map() de fato retornaria cerca de 110. Porém, o constrain(x, a, b) serve justamente para impor os limites superior e inferior, não sendo uma função de arredondamento."
      },
      {
        letra: "D",
        gatilho: "Achar que a função map() exige estritamente limites crescentes.",
        explicacao: "A função map() suporta perfeitamente escalas invertidas (onde in_min > in_max), sendo essa a técnica padrão para calibrar grandezas inversamente proporcionais."
      }
    ]
  },
  {
    id: 11,
    categoria: "programacao",
    categoriaNome: "Programação / Código",
    competencia: "Arquitetura de Software Embarcado, Temporização Não-Bloqueante vs Bloqueante (delay vs millis)",
    enunciado: "Em uma célula automatizada equipada com um robô SCARA, um único microcontrolador foi encarregado de executar duas tarefas essenciais:<br>• <strong>Tarefa 1</strong>: Coletar os dados de temperatura do enrolamento do motor e enviar para o servidor via rede uma vez a cada 5 segundos;<br>• <strong>Tarefa 2</strong>: Monitorar um sensor fotoelétrico de cortina de luz (ligado a uma entrada digital) para acionar instantaneamente a parada de emergência caso um operador invada a área delimitada de risco.<br>Um desenvolvedor escreveu o seguinte laço principal (loop):",
    comando: "Nos testes de comissionamento de segurança segundo as normas técnicas, o sistema foi reprovado porque, em diversas ocasiões, a interrupção da cortina de luz demorava segundos para parar o robô. Qual é a causa do mau funcionamento e qual padrão de programação resolve o problema?",
    imagem: null,
    codigo: `void loop() {
  // Tarefa 1: Coleta e transmissao a cada 5 segundos
  coletarTemperaturaEEnviar();
  delay(5000); // Pausa de 5 segundos

  // Tarefa 2: Monitoramento de seguranca
  if (digitalRead(PINO_CORTINA_LUZ) == LOW) {
    acionarParadaEmergencia();
  }
}`,
    opcoes: [
      {
        letra: "A",
        texto: "A função delay(5000) é bloqueante e suspende a execução da CPU durante 5000 ms, impedindo que a instrução de leitura da cortina de luz seja executada nesse intervalo; a solução é substituir o delay() por temporização não-bloqueante baseada na função millis() (ou configurar uma interrupção externa por hardware via attachInterrupt).",
        correta: true
      },
      {
        letra: "B",
        texto: "O laço de repetição loop() é executado apenas uma única vez na inicialização; para rodar continuamente, a verificação da cortina de luz deveria estar dentro de um laço for(;;) antes da leitura da temperatura.",
        correta: false
      },
      {
        letra: "C",
        texto: "O tempo de atraso de 5 segundos é insuficiente para a transmissão de pacotes; para resolver o problema, deve-se aumentar o delay para delay(10000).",
        correta: false
      },
      {
        letra: "D",
        texto: "A leitura da cortina de luz deveria ser feita com analogRead() para aumentar a velocidade de clock do barramento de segurança.",
        correta: false
      }
    ],
    justificativaCorreta: "A instrução <code>delay(5000)</code> é <strong>bloqueante</strong>: durante 5 segundos o núcleo do microcontrolador fica congelado executando ciclos vazios (NOP), sem avaliar nenhuma outra linha do código. Para sistemas de automação que exigem resposta rápida a eventos, deve-se usar <strong>temporização não-bloqueante com <code>millis()</code></strong> ou interrupções de hardware (<code>attachInterrupt()</code>), permitindo que a CPU verifique a segurança milhares de vezes por segundo.",
    distratores: [
      {
        letra: "B",
        gatilho: "Desconhecer a estrutura fundamental do framework Arduino.",
        explicacao: "A função loop() já é executada repetidamente e indefinidamente pela biblioteca interna do Arduino. O problema não é o reinício do loop, mas sim a pausa imposta pelo delay."
      },
      {
        letra: "C",
        gatilho: "Aumentar ainda mais o tempo de congelamento do processador.",
        explicacao: "Aumentar o delay para 10000 ms deixaria a célula cega e desprotegida por 10 segundos a cada ciclo, ampliando drasticamente o risco de acidentes."
      },
      {
        letra: "D",
        gatilho: "Acreditar que analogRead() é mais rápido que digitalRead().",
        explicacao: "A conversão analógica com analogRead() é muito mais lenta (cerca de 100 µs por amostra no ATmega328P) do que a leitura direta de registradores digitais com digitalRead() (frações de microssegundo)."
      }
    ]
  }
];

// ESTADO DO QUIZ
const EstadoQuiz = {
  respostas: {}, // idQuestao: { letraSelecionada: 'A', verificada: true/false, correta: true/false }
  categoriaAtiva: "todas",
  gabaritoVisivelGlobal: false,
  questaoAtual: 1
};

// INICIALIZAÇÃO
document.addEventListener("DOMContentLoaded", function () {
  renderizarQuiz();
  configurarFiltros();
  atualizarBarraStatus();
});

// RENDERIZAR QUESTÕES
function renderizarQuiz() {
  const container = document.getElementById("quiz-container");
  if (!container) return;

  container.innerHTML = "";

  DADOS_QUIZ.forEach((q, index) => {
    const card = document.createElement("article");
    card.className = "card-questao";
    card.id = `questao-${q.id}`;
    card.dataset.categoria = q.categoria;
    card.style.display = index === 0 ? "block" : "none";

    // Cabeçalho do Card
    let html = `
      <div class="questao-cabecalho">
        <div class="questao-tags">
          <span class="tag-numero">Questão ${String(q.id).padStart(2, '0')}</span>
          <span class="tag-categoria">${q.categoriaNome}</span>
          <span class="tag-saep">Modelo SAEP/ENEM</span>
        </div>
        <span class="tag-status-questao" id="status-tag-${q.id}"></span>
      </div>

      <div class="questao-texto-contexto">
        <p>${q.enunciado}</p>
      </div>
    `;

    // Imagem se houver
    if (q.imagem) {
      html += `
        <div class="questao-imagem-box">
          <img src="${q.imagem}" alt="${q.imagemAlt}">
          <span class="questao-imagem-legenda">${q.imagemAlt}</span>
        </div>
      `;
    }

    // Código se houver
    if (q.codigo) {
      html += `
        <pre class="bloco-codigo"><code>${escapeHtml(q.codigo)}</code></pre>
      `;
    }

    // Comando da questão
    html += `
      <div class="questao-comando">
        ${q.comando}
      </div>
    `;

    // Opções de resposta A, B, C, D
    html += `<div class="quiz-opcoes" id="opcoes-${q.id}">`;
    q.opcoes.forEach(op => {
      html += `
        <label class="quiz-opcao-label" data-letra="${op.letra}" onclick="selecionarOpcao(${q.id}, '${op.letra}')">
          <input type="radio" name="resposta-q${q.id}" value="${op.letra}">
          <span class="quiz-opcao-letra">${op.letra}</span>
          <span class="quiz-opcao-texto">${op.texto}</span>
        </label>
      `;
    });
    html += `</div>`;

    // Rodapé da questão
    html += `
      <div class="questao-rodape">
        <button type="button" class="btn-verificar" id="btn-verificar-${q.id}" onclick="verificarQuestao(${q.id})" disabled>
          Verificar Resposta
        </button>
        <button type="button" class="btn-toggle-explicacao" id="btn-toggle-exp-${q.id}" onclick="toggleExplicacao(${q.id})">
          Ver Justificativa Completa
        </button>
        ${index < DADOS_QUIZ.length - 1 ? `<button type="button" class="btn-proxima" id="btn-proxima-${q.id}" onclick="avancarParaProxima(${q.id})">Próxima questão</button>` : ""}
      </div>
    `;

    // Feedback pedagógico / Gabarito comentado
    html += `
      <div class="feedback-box" id="feedback-${q.id}">
        <div class="feedback-titulo" id="feedback-titulo-${q.id}"></div>
        <div class="feedback-texto-correta">
          <strong>Justificativa da Alternativa Correta:</strong><br>
          ${q.justificativaCorreta}
        </div>
        <div class="distratores-container">
          <div class="distratores-titulo">Análise dos Distratores (Por que as outras alternativas estão incorretas):</div>
          ${q.distratores.map(d => `
            <div class="distrator-item">
              <strong>Alternativa ${d.letra}:</strong> <span class="distrator-gatilho">${d.gatilho}</span> — ${d.explicacao}
            </div>
          `).join('')}
        </div>
      </div>
    `;

    card.innerHTML = html;
    container.appendChild(card);
  });
}

// SELECIONAR UMA OPÇÃO
function selecionarOpcao(idQuestao, letra) {
  const resp = EstadoQuiz.respostas[idQuestao];
  if (resp && resp.verificada) return; // Não altera após verificação

  EstadoQuiz.respostas[idQuestao] = {
    letraSelecionada: letra,
    verificada: false,
    correta: false
  };

  const card = document.getElementById(`questao-${idQuestao}`);
  if (!card) return;

  const labels = card.querySelectorAll(".quiz-opcao-label");
  labels.forEach(lbl => {
    if (lbl.dataset.letra === letra) {
      lbl.classList.add("selecionada");
      const radio = lbl.querySelector('input[type="radio"]');
      if (radio) radio.checked = true;
    } else {
      lbl.classList.remove("selecionada");
    }
  });

  const btnVerificar = document.getElementById(`btn-verificar-${idQuestao}`);
  if (btnVerificar) {
    btnVerificar.disabled = false;
  }
}

// VERIFICAR UMA QUESTÃO
function verificarQuestao(idQuestao) {
  const resp = EstadoQuiz.respostas[idQuestao];
  if (!resp || !resp.letraSelecionada) return;

  const dados = DADOS_QUIZ.find(q => q.id === idQuestao);
  if (!dados) return;

  const opcaoCorreta = dados.opcoes.find(op => op.correta);
  const acertou = resp.letraSelecionada === opcaoCorreta.letra;

  resp.verificada = true;
  resp.correta = acertou;

  const card = document.getElementById(`questao-${idQuestao}`);
  const statusTag = document.getElementById(`status-tag-${idQuestao}`);
  const feedbackBox = document.getElementById(`feedback-${idQuestao}`);
  const feedbackTitulo = document.getElementById(`feedback-titulo-${idQuestao}`);
  const btnVerificar = document.getElementById(`btn-verificar-${idQuestao}`);
  const btnToggleExp = document.getElementById(`btn-toggle-exp-${idQuestao}`);

  if (card) {
    card.classList.remove("respondida-correta", "respondida-incorreta");
    card.classList.add(acertou ? "respondida-correta" : "respondida-incorreta");
  }

  // Estiliza opções
  const labels = card.querySelectorAll(".quiz-opcao-label");
  labels.forEach(lbl => {
    lbl.classList.add("desabilitada");
    const letra = lbl.dataset.letra;
    if (letra === opcaoCorreta.letra) {
      lbl.classList.add("correta");
    } else if (letra === resp.letraSelecionada && !acertou) {
      lbl.classList.add("incorreta");
    }
  });

  // Atualiza Tag de Status
  if (statusTag) {
    statusTag.className = `tag-status-questao ${acertou ? 'correta' : 'incorreta'}`;
    statusTag.innerHTML = acertou ? "&#10004; Correto" : "&#10008; Incorreto";
  }

  // Feedback Box
  if (feedbackBox && feedbackTitulo) {
    feedbackBox.className = `feedback-box visivel ${acertou ? 'correto' : 'incorreto'}`;
    feedbackTitulo.innerHTML = acertou
      ? "&#10004; Parabéns! Você acertou a questão."
      : `&#10008; Atenção! A resposta correta é a Alternativa ${opcaoCorreta.letra}.`;
  }

  if (btnVerificar) {
    btnVerificar.style.display = "none";
  }
  if (btnToggleExp) {
    btnToggleExp.style.display = "inline-block";
    btnToggleExp.innerText = "Ocultar Justificativa";
  }

  const btnProxima = document.getElementById(`btn-proxima-${idQuestao}`);
  if (btnProxima) btnProxima.style.display = "inline-block";

  atualizarBarraStatus();
  verificarConclusaoTotal();
}

function avancarParaProxima(idQuestao) {
  const indiceAtual = DADOS_QUIZ.findIndex(q => q.id === idQuestao);
  const proxima = DADOS_QUIZ[indiceAtual + 1];
  if (!proxima) return;

  const atual = document.getElementById(`questao-${idQuestao}`);
  const proximaCard = document.getElementById(`questao-${proxima.id}`);
  if (!atual || !proximaCard) return;

  atual.style.display = "none";
  proximaCard.style.display = "block";
  EstadoQuiz.questaoAtual = proxima.id;
  proximaCard.scrollIntoView({ behavior: "smooth", block: "start" });
}

// TOGGLE EXPLICAÇÃO
function toggleExplicacao(idQuestao) {
  const fb = document.getElementById(`feedback-${idQuestao}`);
  const btn = document.getElementById(`btn-toggle-exp-${idQuestao}`);
  if (!fb || !btn) return;

  const visivel = fb.classList.toggle("visivel");
  btn.innerText = visivel ? "Ocultar Justificativa" : "Ver Justificativa Completa";
}

// ATUALIZAR STATUS BAR E PROGRESSO
function atualizarBarraStatus() {
  const total = DADOS_QUIZ.length;
  let respondidas = 0;
  let acertos = 0;
  let erros = 0;

  for (let id in EstadoQuiz.respostas) {
    const r = EstadoQuiz.respostas[id];
    if (r && r.verificada) {
      respondidas++;
      if (r.correta) acertos++;
      else erros++;
    }
  }

  const elTotal = document.getElementById("stat-total");
  const elRespondidas = document.getElementById("stat-respondidas");
  const elAcertos = document.getElementById("stat-acertos");
  const elTaxa = document.getElementById("stat-taxa");
  const elBarra = document.getElementById("barra-progresso-fill");

  if (elTotal) elTotal.innerText = total;
  if (elRespondidas) elRespondidas.innerText = respondidas;
  if (elAcertos) elAcertos.innerText = acertos;

  const taxa = respondidas > 0 ? Math.round((acertos / respondidas) * 100) : 0;
  if (elTaxa) elTaxa.innerText = `${taxa}%`;

  if (elBarra) {
    const pctProgresso = Math.round((respondidas / total) * 100);
    elBarra.style.width = `${pctProgresso}%`;
  }
}

// VERIFICAR SE TODAS FORAM RESPONDIDAS E MOSTRAR PAINEL FINAL
function verificarConclusaoTotal() {
  const total = DADOS_QUIZ.length;
  let verificadas = 0;
  let acertos = 0;

  for (let id in EstadoQuiz.respostas) {
    if (EstadoQuiz.respostas[id].verificada) {
      verificadas++;
      if (EstadoQuiz.respostas[id].correta) acertos++;
    }
  }

  if (verificadas === total) {
    exibirPainelResultado(acertos, total);
  }
}

// EXIBIR PAINEL DE RESULTADO FINAL
function exibirPainelResultado(acertos, total) {
  const painel = document.getElementById("painel-resultado-final");
  if (!painel) return;

  const porcentagem = Math.round((acertos / total) * 100);

  let proficienciaClasse = "";
  let proficienciaTexto = "";

  if (porcentagem >= 85) {
    proficienciaClasse = "proficiencia-avancado";
    proficienciaTexto = "Nível de Proficiência: AVANÇADO";
  } else if (porcentagem >= 70) {
    proficienciaClasse = "proficiencia-adequado";
    proficienciaTexto = "Nível de Proficiência: ADEQUADO";
  } else if (porcentagem >= 50) {
    proficienciaClasse = "proficiencia-basico";
    proficienciaTexto = "Nível de Proficiência: BÁSICO";
  } else {
    proficienciaClasse = "proficiencia-abaixo";
    proficienciaTexto = "Nível de Proficiência: ABAIXO DO BÁSICO";
  }

  // Agrupamento por categorias
  const cats = {
    "banco-dados": { nome: "Banco de Dados", total: 0, acertos: 0 },
    "robotica": { nome: "Robótica Industrial", total: 0, acertos: 0 },
    "sensores": { nome: "Sensores", total: 0, acertos: 0 },
    "multimetro": { nome: "Multímetro & Metrologia", total: 0, acertos: 0 },
    "arduino": { nome: "Arduino (Hardware & E/S)", total: 0, acertos: 0 },
    "esp": { nome: "ESP (ESP8266/ESP32 & IoT)", total: 0, acertos: 0 },
    "programacao": { nome: "Programação & Código", total: 0, acertos: 0 }
  };

  DADOS_QUIZ.forEach(q => {
    if (cats[q.categoria]) {
      cats[q.categoria].total++;
      if (EstadoQuiz.respostas[q.id] && EstadoQuiz.respostas[q.id].correta) {
        cats[q.categoria].acertos++;
      }
    }
  });

  let cardsCatsHtml = "";
  for (let k in cats) {
    const c = cats[k];
    const pct = c.total > 0 ? Math.round((c.acertos / c.total) * 100) : 0;
    cardsCatsHtml += `
      <div class="resultado-competencia-card">
        <h4>${c.nome}</h4>
        <div class="acerto-taxa">${c.acertos}/${c.total} <span style="font-size:0.9rem; color:#64748b;">(${pct}%)</span></div>
      </div>
    `;
  }

  painel.innerHTML = `
    <h2>Resultado do Simulado SAEP / ENEM</h2>
    <p>Confira o seu desempenho nas competências de Desenvolvimento de Sistemas e Automação IoT.</p>
    
    <div class="resultado-pontuacao-destaque">
      ${acertos} <span>/ ${total}</span>
    </div>
    
    <div class="resultado-proficiencia ${proficienciaClasse}">
      ${proficienciaTexto}
    </div>

    <div class="resultado-detalhes-grid">
      ${cardsCatsHtml}
    </div>

    <div class="resultado-acoes">
      <button type="button" class="botao" onclick="reiniciarSimulado()">Refazer Simulado</button>
      <button type="button" class="btn-secundario" onclick="mostrarGabaritoCompleto()">Revisar Todas as Justificativas</button>
    </div>
  `;

  painel.style.display = "block";
  painel.scrollIntoView({ behavior: "smooth" });
}

// FILTROS DE CATEGORIA
function configurarFiltros() {
  const containerFiltros = document.getElementById("quiz-filtros");
  if (!containerFiltros) return;

  containerFiltros.addEventListener("click", function (e) {
    if (!e.target.classList.contains("filtro-btn")) return;

    containerFiltros.querySelectorAll(".filtro-btn").forEach(btn => btn.classList.remove("ativo"));
    e.target.classList.add("ativo");

    const cat = e.target.dataset.categoria;
    filtrarPorCategoria(cat);
  });
}

function filtrarPorCategoria(cat) {
  EstadoQuiz.categoriaAtiva = cat;
  const cards = document.querySelectorAll(".card-questao");
  cards.forEach(card => {
    if (cat === "todas" && Number(card.id.replace("questao-", "")) <= EstadoQuiz.questaoAtual) {
      card.style.display = "block";
    } else {
      card.style.display = "none";
    }
  });
}

// MOSTRAR GABARITO COMPLETO (MODO DE ESTUDO / PROFESSOR)
function mostrarGabaritoCompleto() {
  DADOS_QUIZ.forEach(q => {
    if (!EstadoQuiz.respostas[q.id] || !EstadoQuiz.respostas[q.id].verificada) {
      const correta = q.opcoes.find(op => op.correta);
      selecionarOpcao(q.id, correta.letra);
      verificarQuestao(q.id);
    }
    const fb = document.getElementById(`feedback-${q.id}`);
    const btn = document.getElementById(`btn-toggle-exp-${q.id}`);
    if (fb) fb.classList.add("visivel");
    if (btn) btn.innerText = "Ocultar Justificativa";
  });

  const cards = document.querySelectorAll(".card-questao");
  cards.forEach(c => c.style.display = "block");

  const btnTodas = document.querySelector('.filtro-btn[data-categoria="todas"]');
  if (btnTodas) {
    document.querySelectorAll(".filtro-btn").forEach(b => b.classList.remove("ativo"));
    btnTodas.classList.add("ativo");
  }

  const primeira = document.getElementById("questao-1");
  if (primeira) primeira.scrollIntoView({ behavior: "smooth" });
}

// REINICIAR SIMULADO
function reiniciarSimulado() {
  EstadoQuiz.respostas = {};
  EstadoQuiz.questaoAtual = 1;
  renderizarQuiz();
  atualizarBarraStatus();
  filtrarPorCategoria("todas");

  const btnTodas = document.querySelector('.filtro-btn[data-categoria="todas"]');
  if (btnTodas) {
    document.querySelectorAll(".filtro-btn").forEach(b => b.classList.remove("ativo"));
    btnTodas.classList.add("ativo");
  }

  const painel = document.getElementById("painel-resultado-final");
  if (painel) {
    painel.style.display = "none";
    painel.innerHTML = "";
  }

  window.scrollTo({ top: 0, behavior: "smooth" });
}

// ESCAPAR HTML EM BLOCOS DE CÓDIGO
function escapeHtml(str) {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
