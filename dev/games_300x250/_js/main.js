import { olg } from "../../_common/js/proline.js";
import { commonInit } from "../../_common/js/common.js";
import { games } from "../../_common/js/reads.js";

function init() {
  const tl = commonInit();

  // translate(-150px, -150px) scale(0.42)

  tl.add("f2", "+=.5");
  tl.to([".f1_device"], { duration: 0.3, scale: 0.39, y: -159 }, "f2");

  tl.from(".f2_txt", { duration: 0.3, opacity: 0 });

  tl.add("f3", `+=${games.t1}`);
  
  tl.from(".f3_txt", { duration: 0.3, opacity: 0 }, "f3");

  tl.add("f4", `+=${games.t2}`);
  tl.to(".f3_txt", { duration: 0.3, opacity: 0 }, "f4");
  tl.to(".f2_txt", { duration: 0.3, opacity: 0 }, "f4");

  tl.from(".f4_txt", { duration: 0.3, opacity: 0 });
  tl.from(".f4_cta", { duration: 0.3, opacity: 0 });

  tl.add(olg());

  return tl;
}

init();
