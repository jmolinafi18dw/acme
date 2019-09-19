var a=0;
		$(document).ready(function(){
				$("#botoncd").mouseover(function(event) {
					if(a==0){
						$("#imagen").attr('src','Actores/2.jpg');
						a++;
					}	
					else if(a==1){
						$("#imagen").attr('src','Actores/3.jpeg');
						a++;
					}	
					else if(a==2){
						$("#imagen").attr('src','Actores/4.jpg');
						a++;
					}	
					else if(a==3){
						$("#imagen").attr('src','Actores/5.jpg');
						a++;
					}	
					else if(a==4){
						$("#imagen").attr('src','Actores/6.jfif');
						a++;
					}	
					else if(a==5){
						$("#imagen").attr('src','Actores/7.jpg');
						a++;
					}	
					else if(a==6){
						$("#imagen").attr('src','Actores/1.jpg');
						a=0;
					}	
				});
				$("#botoncu").mouseover(function(event) {
					if(a==0){
						$("#imagen").attr('src','Actores/1.jpg');
						a++;
					}	
					else if(a==1){
						$("#imagen").attr('src','Actores/2.jpg');
						a++;
					}	
					else if(a==2){
						$("#imagen").attr('src','Actores/3.jpeg');
						a++;
					}	
					else if(a==3){
						$("#imagen").attr('src','Actores/4.jpg');
						a++;
					}	
					else if(a==4){
						$("#imagen").attr('src','Actores/5.jpg');
						a++;
					}	
					else if(a==5){
						$("#imagen").attr('src','Actores/6.jfif');
						a++;
					}	
					else if(a==6){
						$("#imagen").attr('src','Actores/7.jpg');
						a=0;
					}	
				});

				$(".imagenactor").mouseover(function(event) {
					$(".imagenactor").css('opacity','0.3');
					$(".imagenactor").css('width','160');
					$(".imagenactor").css('height','205');
				});
				$(".imagenactor").mouseout(function(event) {
					$(".imagenactor").css('opacity','1');
					$(".imagenactor").css('width','160');
					$(".imagenactor").css('height','205');
				});

				$(".imagenactor").mouseover(function(event) {
					$(this).css('opacity','1');
					$(this).css('width','180');
					$(this).css('height','235');
				});

				$(".imagenactor").mouseout(function(event) {
					$(this).css('opacity','1');
					$(this).css('width','160');
					$(this).css('height','205');
				});


		});