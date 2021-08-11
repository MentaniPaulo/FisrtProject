function Calc(argument) {
			
		var tags = document.getElementsByTagName("input");
		var preco = parseFloat(tags[0].value);
		var icms = parseFloat(tags[1].value)/100;
		var ipi =  parseFloat(tags[2].value)/100;
		var pf =  parseFloat(tags[3].value);
		 // ICMS = {[A + (A x B)] ÷ [1 - A - (A x B)]} x C
		 console.log(pf);
		if(preco != 0){
		icms = (	icms	+ 	(icms * ipi)	)/(	1 -	icms	-	(icms*ipi)	)
		console.log(icms);
		let g = ((icms*preco+preco)*(ipi+1));
		console.log(g.toFixed(2));
		tags[3].value=(g.toFixed(2));
		tags[3].style.color="#f00";
	//	tags[0].style.color="#FFF";
	}
	}