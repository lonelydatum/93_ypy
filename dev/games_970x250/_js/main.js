import {games} from '../../_common/js/reads.js'
import {commonInit} from '../../_common/js/common.js'

 



	const tl = new commonInit()
	
	
	tl.add("f2", "+=.5")
	
	

	tl.from(".f2_txt", {duration:.5, opacity:0}, "f2")

	tl.add("f3", `+=${games.t1}`)
	tl.to(".f2_txt", {duration:.3, opacity:0}, "f3")
	tl.from(".f3_txt", {duration:.3, opacity:0})


	tl.add("f4", `+=${games.t2}`)
	tl.to([".f3_txt"], {duration:.3, opacity:0}, "f4")
	

	
	tl.from(".f4_txt", {duration:.3, opacity:0})
	tl.from(".f4_cta", {duration:.3, opacity:0})

	

	
	
	
