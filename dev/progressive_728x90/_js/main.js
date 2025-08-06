import { commonInit } from "../../_common/js/common.js";
import { progressive } from "../../_common/js/reads.js";

import { olg } from "../../_common/js/proline.js";

function init() {
  const tl = new commonInit();

  tl.add("f2", "+=.1");

  tl.from(".f2_txt", { duration: 0.5, opacity: 0 }, "f2");

  tl.add("f3", `+=${progressive.t1}`);

  tl.from(".f3_txt", { duration: 0.3, opacity: 0 }, "f3");

  tl.add("f4", `+=${progressive.t2}`);
  tl.to(
    [".f3_txt", ".f1_txt_1", ".f1_txt_2", ".f1_txt_3"],
    { duration: 0.3, opacity: 0 },
    "f4"
  );
  tl.to(".f2_txt", { duration: 0.3, opacity: 0 }, "f4");
  tl.to(".f1_device", { duration: 0.3, x: "+=46" });

  tl.from(".f4_txt", { duration: 0.3, opacity: 0 });
  tl.from(".f4_cta", { duration: 0.3, opacity: 0 });

  tl.add(olg());

  return tl;
}

init();
