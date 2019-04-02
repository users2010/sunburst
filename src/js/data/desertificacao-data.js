var dataDesertificacao = {
  name: "Desertificação",
  name2: "Desertificação",
  color: "level_one_desertif_color",
  labelColor: "black", 
  imgName: "geonode:imd_d",
  level: 1,
  children: [
    {
      name: "Estado",
      name2: "Estado",
      color: "level_two_color",
      labelColor: "black",           
      imgName: "geonode:imd_e",
      size: 2,
      level: 2,
      children: [
        {
          name: "Condição Ambiental",
          name2: "Condição Ambiental",
          color: "level_three_estado_color",
          labelColor: "white",                  
          size: 10,
          level: 3,
          imgName: "",
          children: [
            {                  
              name: "Índice de Aridez",
              name2: "Índice de aridez",
              color: "level_four_condicao_ambiental_color",
              labelColor: "black",
              imgName: "geonode:ind_arid",
              level: 4,
              size: 5
            },
            {
              name: "Índice de Seca",
              name2: "Índice de seca",
              color: "level_four_condicao_ambiental_color",
              labelColor: "black", 
              level: 4,                 
              imgName: "geonode:newnew_spi",
              size: 3.3
            },
            {
              name: "Cobertura Vegetal",
              name2: "Cobertura vegetal 2017",
              color: "level_four_condicao_ambiental_color",
              labelColor: "black",    
              imgName: "geonode:new_cobertura",                 
              level: 4,
              size: 5
            },
            {
              name: "Grau de Fertilidade do Solo",
              name2: "Grau de Fertilidade do Solo",
              color: "level_four_condicao_ambiental_color",
              labelColor: "black",
              level: 4,
              size: 5,
              imgName: "geonode:compressed_gfsol",
              size: 3.3
            },
            {
              name: "Risco de Erosão Hídrica",
              name2: "Risco de erosão hídrica do solo",
              color: "level_four_condicao_ambiental_color",
              labelColor: "black",   
              level: 4,          
              size: 5,
              imgName: "geonode:pne",               
            }
          ]
        },
        {
          name: "Condição Econômica",
          name2: "Condição Econômica",
          color: "level_three_estado_color",
          labelColor: "white",               
          size: 10,
          level: 3,
          imgName: "",
          children: [
            {
              name: "Renda Per Capita Rural",
              name2: "Renda per capita rural",
              color: "level_four_condicao_economica_color",
              labelColor: "white",              
              level: 4,                          
              size: 5,
              imgName: "geonode:rpcr",
            },
            {
              name: "Produtividade do Feijão",
              name2: "Produtividade do feijão",
              color: "level_four_condicao_economica_color", 
              labelColor: "white", 
              level: 4,                   
              size: 5,
              imgName: "geonode:rctf2006mm",
            },
            {
              name: "Produtividade do Milho",
              name2: "Produtividade do milho",
              color: "level_four_condicao_economica_color",    
              labelColor: "white",
              level: 4,   
              imgName: "geonode:rctm2006mm",              
              size: 5
            }
          ]
        },
        {
          name: "Condição Social",
          name2: "Condição Social",
          color: "level_three_estado_color",
          labelColor: "white",    
          level: 3,             
          size: 10,
          imgName: "",
          children: [
            {
              name: "Densidade de População Rural",
              name2: "Densidade de população rural",
              color: "level_four_condicao_social_color",
              labelColor: "white",  
              level: 4,   
              size: 5,
              imgName: "geonode:dprur_1",                    
            },
            {
              name: "Estabelecimentos Rurais Dirigidos por Mulheres",
              name2: "Estabelecimentos rurais dirigidos por mulheres",
              color: "level_four_condicao_social_color",
              labelColor: "white",
              level: 4,   
              size: 5,
              imgName: "geonode:aedm",
            }
          ]
        }
      ]
    },
    {
      name: "Força Motriz",
      name2: "Força Motriz",
      color: "level_two_color",
      labelColor: "black",          
      level: 2,
      imgName: "geonode:imd_f",
      size: 2,
      children: [
        {
          name: "Concentração de Terra",
          name2: "Concentração de Terra",
          color: "level_three_forca_motriz_color",
          labelColor: "white",        
          level: 3,                                
          size: 10,
          imgName: "",
          children: [
            {
              name: "Área dos Estabelecimentos Rurais Menores que o Módulo Fiscal",
              name2: "Área dos estabelecimentos fiscais menores que o módulo fiscal",
              color: "level_four_condicao_terra_color",
              labelColor: "black",                     
              level: 4,   
              imgName: "geonode:aemmf", 
              size: 3.3
            },
            {
              name: "Área dos Estabelecimentos Rurais Sob Regime de Não Propriedade",
              name2: "Área dos estabelecimentos rurais sob regime de não propriedade",
              color: "level_four_condicao_terra_color",
              labelColor: "black",                     
              level: 4,   
              imgName: "geonode:aernp",  
              size: 3.3
            }
          ]
        },
        {
          name: "Influência da População Urbana",
          name2: "Influência da população urbana",
          color: "level_three_forca_motriz_color",
          labelColor: "white",              
          level: 3,      
          size: 14,
          imgName: "geonode:inf_pop",
        },
        {
          name: "Desigualdade Social no Campo",
          name2: "Desigualdade Social no Campo",
          color: "level_three_forca_motriz_color",
          labelColor: "white",           
          level: 3,         
          size: 10,
          imgName: "",
          children: [
            {
              name: "Analfabetismo no Campo",
              name2: "Analfabetismo",
              color: "level_four_influencia_social_campo_color",
              labelColor: "white", 
              level: 4,   
              imgName: "geonode:analf",                        
              size: 3.3
            },
            {
              name: "População Rural Abaixo da Linha de Pobreza",
              name2: "População abaixo da linha de pobreza",
              color: "level_four_influencia_social_campo_color",
              labelColor: "white",     
              level: 4,   
              imgName: "geonode:pralp",  
              size: 3.3
            }
          ]
        }
      ]
    },
    {
      name: "Respostas",
      name2: "Respostas",
      color: "level_two_color",
      labelColor: "black",              
      level: 2,
      imgName: "geonode:imd_r",
      size: 2,
      children: [
        {
          name: "Organização da Sociedade Civil",
          name2: "Organização da Sociedade Civil",
          color: "level_three_resposta_color",
          labelColor: "white",                      
          level: 3,   
          size: 10,
          imgName: "", 
          children: [
            {
              name: "ONG's Dedicadas ao Desenvolvimento Rural Sustentável",
              name2: "Organizações sociais dedicadas ao desenvolvimento rural sustentável",
              color: "level_four_sociedade_civil_color",
              labelColor: "black", 
              level: 4,   
              imgName: "geonode:nong",                        
              size: 3.3
            },
            {
              name: "Famílias Atendidas com Tecnologias Sociais de Acesso à Água",
              name2: "Domicílios rurais atendidos com tecnologias sociais de acesso à água",
              color: "level_four_sociedade_civil_color",
              labelColor: "black",     
              level: 4,   
              imgName: "geonode:dtsaa_nmin",  
              size: 3.3
            }
          ]              
        },
        {
          name: "Organização do Poder Público",
          name2: "Organização do Poder Público",
          color: "level_three_resposta_color",
          labelColor: "white",  
          level: 3,   
          imgName: "",                 
          size: 10,
          children: [
            {
              name: "Organizações Governamentais e Instituições de Pesquisa Dedicadas ao Desenvolvimento Rural Sustentável",
              name2: "Organismos governamentais e instituições de ensino e pesquisa dedicadas ao desenvolvimento rural sustentável",
              color: "level_four_poder_publico_color",
              labelColor: "black", 
              level: 4,   
              imgName: "geonode:nogip",                        
              size: 3.3
            },
            {
              name: "Programas Dedicados ao Desenvolvimento Rural Sustentável",
              name2: "Programas dedicados ao desenvolvimento rural sustentável",
              color: "level_four_poder_publico_color",
              labelColor: "black",     
              level: 4,   
              imgName: "geonode:npdrs",  
              size: 3.3
            },
            {
              name: "Variação das Transferências de Renda",
              name2: "Variação da participação das transferências governamentais",
              color: "level_four_poder_publico_color",
              labelColor: "black", 
              level: 4,   
              imgName: "geonode:vptr",                        
              size: 3.3
            },
            {
              name: "Proteção por Unidade de Conservação",
              name2: "Nível de proteção por unidade de conservação",
              color: "level_four_poder_publico_color",
              labelColor: "black",     
              level: 4,   
              imgName: "geonode:npuc",  
              size: 3.3
            }                
          ]                  
        }
      ]
    },
    {
      name: "Impacto",
      name2: "Impacto",
      color: "level_two_color",
      labelColor: "black",              
      imgName: "geonode:imd_i",
      level: 2,
      size: 5,
      children: [
        {
          name: "Taxa de Migração do Campo para a Cidade",
          name2: "Taxa de migração do campo para a cidade",
          color: "level_three_impacto_color",
          labelColor: "white",        
          level: 3,   
          size: 14,
          imgName: "geonode:vpr_10",            
        },
        {
          name: "Variação da Participação da Agropecuária no PIB",
          name2: "Variação do valor adicionado da agropecuária no PIB",
          color: "level_three_impacto_color",
          labelColor: "white",                
          level: 3,   
          size: 14,
          imgName: "geonode:vvaamm",  
        }
      ]
    },
    {
      name: "Pressão",
      name2: "Pressão",
      color: "level_two_color",
      labelColor: "black",              
      imgName: "geonode:imd_p",
      size: 2,
      level: 2,
      children: [
        {
          name: "Desmatamento",
          name2: "Desmatamento",
          color: "level_three_pressao_color",
          labelColor: "black",    
          level: 3,                   
          size: 10,
          imgName: "",
          children: [
            {
              name: "Avanço da Fronteira Agropecuária",
              name2: "Avanço da fronteira agropecuária",
              color: "level_four_pressao_desmatamento_campo_color",
              labelColor: "black",                       
              level: 4,   
              imgName: "geonode:afagp",
              size: 3.3
            },
            {
              name: "Mudança da Cobertura Vegetal",
              name2: "Mudança da cobertura vegetal",
              color: "level_four_pressao_desmatamento_campo_color",
              labelColor: "black",    
              level: 4,                       
              labelColor: "black",                        
              imgName: "geonode:mudanca",
              size: 3.3
            }
          ]
        },
        {
          name: "Manejamento Inadequado da Terra",
          name2: "Manejamento Inadequado da Terra",
          color: "level_three_pressao_color",
          labelColor: "black",             
          level: 3,     
          size: 10,
          imgName: "",
          children: [
            {
              name: "Carga Animal Excessiva",
              name2: "Carga animal",
              color: "level_four_pressao_manejamento_ina_color",
              labelColor: "black",
              level: 4,   
              imgName: "geonode:uapha",                        
              size: 3.3
            },
            {
              name: "Recorrência de Incêndio",
              name2: "Recorrência de incêndio",
              color: "level_four_pressao_manejamento_ina_color",
              labelColor: "black",   
              level: 4,       
              imgName: "geonode:incendio",                
              size: 3.3
            }
          ]
        }
      ]
    }
  ]
};