import CardItems from "./CardItems"

function Card() {
    return (
        <div className="flex flex-col mx-auto">
            <CardItems
                img="asset/images/preview.jpg"
                title="Visitekaartjes"
                description="Een eerste indruk laat je maar één keer achter. Om dit juist te doen, kunt u bij ons tegen een zeer aantrekkelijke prijs visitekaarten laten maken. Dit kan uw eigen ontwerp zijn of een ontwerp samengesteld in overleg met ons."
            />

            <CardItems
                img="asset/images/flyers.jpg"
                title="Flyers"
                description="Breng je product, een aanbieding of een evenement met een flyer direct onder aandacht bij uw doelgroep. Onze flyers worden op kwalitatief papier gedrukt middels geavanceerde druktechnieken."
            />

            <CardItems
                img="asset/images/grootformaat.jpg"
                title="XL posters"
                description="U kunt bij ons uw favoriete foto als poster laten afdrukken op onze grootformaat printer. Het is bij ons mogelijk om te printen tot 30 meter lang!"
            />

            <CardItems
                img="asset/images/wiro-binding.jpg"
                title="Inbinden"
                description="Om al uw printwerk in te binden en te bundelen, zijn er verschillende afwerkmogelijkheden. Informeer naar deze bij ons op locatie."
            />
        </div>
    )
}

export default Card