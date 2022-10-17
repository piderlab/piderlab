import lume from "lume/mod.ts";
import jsx from "lume/plugins/jsx_preact.ts";
import windi from "lume/plugins/windi_css.ts";

const site = lume({
  dest: "./docs",
});

site.use(jsx());
site.use(windi());

export default site;
