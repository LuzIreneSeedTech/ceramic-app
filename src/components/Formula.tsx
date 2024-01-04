import { MathJax, MathJaxContext } from "better-react-mathjax";

export function Formula() {
  return (
    <div className="formula-container">
      <MathJaxContext>
        <MathJax className="equation">
          {"$$MC=({m_w - m_d}/{m_d}) * 100\\%$$"}
        </MathJax>
        <div className="formula-meaning">
          <MathJax className="label-name">
            {"$$MC=\\text{Moisture Content}$$"}
          </MathJax>
          <MathJax className="label-name">
            {"$${m_w} = \\text{weight before oven drying}$$"}
          </MathJax>
          <MathJax className="label-name">
            {"$${m_d} = \\text{weight after oven drying}$$"}
          </MathJax>
        </div>
      </MathJaxContext>
    </div>
  );
}
