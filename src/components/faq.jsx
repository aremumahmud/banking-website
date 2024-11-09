function Faq({ q, a }) {
    return <div className="faq_item">
        <details>
            <summary>{ q}</summary>
  <p>{a}</p>
</details>

    </div>
}


export default Faq