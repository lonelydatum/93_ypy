import {commonInit} from "./common.js"

import {olg} from './proline.js'

function init(obj){	
	const tl = commonInit()
	
	tl.add("f2", "+=.5")
	tl.to(".f1", {duration:.5, opacity:0}, "f2")
	tl.from(".f2_txt", {duration:.4, opacity:0})


	tl.add("f3", `+=${obj.t1}`)
	tl.to(".f2_txt", {duration:.4, opacity:0}, "f3")
	tl.from(".f3_txt", {duration:.4, opacity:0})

	tl.add("f4", `+=${obj.t2}`)
	tl.to(".f3_txt", {duration:.4, opacity:0}, "f4")
	tl.from(".f4_txt", {duration:.4, opacity:0})
	tl.from(".f4_cta", {duration:.4, opacity:0})

	tl.add(olg())
}


export {init}