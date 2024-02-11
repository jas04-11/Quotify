const quote=document.querySelector(".quote");
		const author=document.querySelector(".author");

		quoteBtn=document.querySelector("button");
	
		let getQuote=()=>{
			fetch('https://dummyjson.com/quotes/random')
			.then(res=>res.json())
			.then(result=>{
			quote.innerText=`"${result.quote}"`;
			author.innerText=result.author;
			
		});
		};
		quoteBtn.addEventListener("click",getQuote);
		window.addEventListener("load",getQuote);

		function share(platform) {
		
		window.open("whatsapp://send?text="+ quote.innerText + "--" + author.innerText,"Whatsapp window","width=800,height=500");
		
	}