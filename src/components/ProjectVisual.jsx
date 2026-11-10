export default function ProjectVisual({ type }) {
  return (
    <div className={`project-visual ${type}`}>
      <div className="visual-top">
        <span className="window-dots">
          <i />
          <i />
          <i />
        </span>
        <span className="visual-label">{type === 'algo' ? 'ALGOFLOW / PLAYGROUND' : 'BOOKSHELF / STORE'}</span>
        <span className="visual-live">
          <span />
          LIVE PREVIEW
        </span>
      </div>

      {type === 'algo' ? (
        <div className="algo-ui">
          <div className="algo-sidebar">
            <b>
              AlgoFlow<span>.</span>
            </b>
            <small>VISUALIZER</small>
            <div className="side-active">Sorting algorithms</div>
            <div>Graph traversal</div>
            <div>Dynamic programming</div>
            <div>Tree operations</div>
          </div>

          <div className="algo-main">
            <div className="algo-title">
              Merge Sort <span>O(n log n)</span>
            </div>
            <div className="bars">
              {[34, 61, 43, 83, 52, 72, 27, 94, 48, 67, 38, 78].map((h, i) => (
                <i key={i} style={{ height: `${h}%`, opacity: 0.55 + (i % 4) * 0.12 }} />
              ))}
            </div>
            <div className="algo-controls">
              <span>◀</span>
              <b>Step 08 / 24</b>
              <span>▶</span>
              <div className="progress">
                <i />
              </div>
            </div>
            <div className="code-lines">
              <i />
              <i />
              <i />
              <i />
            </div>
          </div>
        </div>
      ) : (
        <div className="store-ui">
          <div className="store-nav">
            <b>
              paper<span>trail.</span>
            </b>
            <span>Discover&nbsp;&nbsp; Categories&nbsp;&nbsp; Bestsellers</span>
            <i>⌕</i>
          </div>
          <div className="store-hero">
            <div>
              <small>CURATED FOR CURIOUS MINDS</small>
              <h3>
                Stories worth
                <br />
                getting lost in.
              </h3>
              <p>Find your next favourite read.</p>
              <span className="store-cta">EXPLORE BOOKS ↗</span>
            </div>
            <div className="book-stack">
              <div className="book b1">THE<br />DESIGN<br />OF<br />EVERYDAY</div>
              <div className="book b2">ATOMIC<br />HABITS</div>
              <div className="book b3">DEEP<br />WORK</div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
