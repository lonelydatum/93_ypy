function commonInit(){
	const tl = new TimelineMax({onComplete:()=>{
		if(document.getElementById("legalBtn")){			
			TweenLite.set("#legalBtn", {display:"block"})
		}
	}})

	
	

	tl.set(".frame1", {opacity:1})
	tl.from(".f1_txt_1", {duration:.4, opacity:0, y:"-=100"})
	tl.from(".f1_txt_2", {duration:.4, opacity:0, y:"-=100"}, "-=.2")
	tl.from(".f1_txt_3", {duration:.4, opacity:0, y:"-=100"}, "-=.2")

	return tl
}

export {commonInit}