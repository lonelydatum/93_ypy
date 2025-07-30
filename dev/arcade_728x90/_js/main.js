import {commonInit} from '../../_common/js/common.js'
import {arcade} from '../../_common/js/reads.js'

 


function init(){	
	const tl = new commonInit()

	
	
	tl.add("f2", "+=.1")
	
	

	tl.from(".f2_txt", {duration:.5, opacity:0}, "f2")

	tl.add("f3", `+=${arcade.t1}`)
	tl.to(".f2_txt", {duration:.3, opacity:0}, "f3")
	tl.from(".f3_txt", {duration:.3, opacity:0})


	tl.add("f4", `+=${arcade.t2}`)
	tl.to([".f3_txt", ".f1_txt_1", ".f1_txt_2", ".f1_txt_3"], {duration:.3, opacity:0}, "f4")
	tl.to(".f1_device", {duration:.3, x:"+=46"})

	
	tl.from(".f4_txt", {duration:.3, opacity:0})
	tl.from(".f4_cta", {duration:.3, opacity:0})

	

	
	
	
	return tl
}

init()
