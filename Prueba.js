let autos= require ('./Datos.js');
let personas= require ('./datosPersona.js');


const concesionaria = {
    autos: autos,
 
    buscarAuto: function (patente){
      const data= autos.find(valor =>{
       return valor.patente== patente;
      })
           if (data!=undefined){
                     return data;
               }else{
                 return null;
               }
         },
    

    venderAuto: function (dat){
           let autosBuscados= concesionaria.buscarAuto(dat);
          if (autosBuscados==undefined){
                return "No hay autos disponibles para vender";
          }else{
                console.log("hha");
          autosBuscados.vendido=true;
          return autosBuscados;
          }
    },
    autosParaLaVenta : function(datos,callback, callback1){
             let {...autosVendidos}=callback1(datos,callback);
             let autosAutos= autosVendidos.filter(valor=>{
                   return autos.patente!=valor.patente;
             })
        //return autosAutos;
        /* let autosAutos=[];
             for (let i=0;i<autos.length;i++){
                  if (autosVendidos.patente!=autos[i].patente){
              console.log(autos[i]);
              autosAutos.push(autos[i]);
             }
    }*/
},

      autosNuevos:function(dato,callback,a,b,c){
            let lista= callback(a,b,c);
            
            for(let i=0;i<lista.length;i++){
                if(lista[i].km<dato){
                      console.log("Los autos 0km son: ");
                  console.log(lista[i]);
                }
            }
           /* let lista0km= lista.filter(function(valor){
                  return valor.km<dato;
                  })*/
            
      },

      listaDeVentas: function (callback,a,b){
            let lista= callback(a,b);
           console.log("Los precios de los autos vendidos son: " +`${lista.marca} - ${lista.modelo} - $${lista.precio}`);
            
      },
      personas:personas,
      puedeComprar: function(auto,callback){
            let dato= callback(auto);
            let cuotaFinal= dato.precio / dato.cuotas ;
             personas.forEach(function(valor,indice){
            if((dato.precio< valor.capacidadDePagoTotal)&&(cuotaFinal< valor.capacidadDePagoEnCuotas)){
                  console.log("Realiza la compra");
                  return true;
            } else{
                  console.log("No realiza la compra");
                  return false;
            }
      })
}
}



 
//concesionaria.autosNuevos(100,concesionaria.autosParaLaVenta,'APL123',concesionaria.buscarAuto, concesionaria.venderAuto);

//concesionaria.listaDeVentas(concesionaria.venderAuto,'APL123',concesionaria.buscarAuto);
//concesionaria.listaDeVentas(concesionaria.venderAuto,'JJK126',concesionaria.buscarAuto);
//concesionaria.puedeComprar('APL123',concesionaria.buscarAuto)


//console.log(concesionaria.autosParaLaVenta('APL123',concesionaria.buscarAuto, concesionaria.venderAuto));
console.log(concesionaria.venderAuto('APL123'));


