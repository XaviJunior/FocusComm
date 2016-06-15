var ViewActualites = Pclia.ViewCollection.extend({
    events: {
        "click .fondnoir": "cacherViewActu",
        "click .articleliee": "showLinkedArticle",
        "click .filter": "filterClickHandler"
    },
    initialize: function () {
        this.listenTo(this.collection, "add remove", this.render);
    },
    render: function () {
        var container = this.$el;
        container.html(Tmpl.actualites());
        _.each(this.collection.models, function (model) {
            var view = new ViewActualite({model: model});
            var dom = view.render();
            $("#actualitesList", container).append(dom);
        });
        return container;
    },
    
    cacherViewActu: function(){
        $(".fondnoir").fadeOut();
        $(".actualite").fadeOut();
        $('html, body').css({
            'overflow': 'auto',
        });
    },
    showLinkedArticle: function (evt) {
        console.log($(evt.target));
        var idCurrent = $(evt.target).attr("data-actualite_id");
        var idLinked = $(evt.target).attr("data-actualiteLiee_id");
        $("#card_"+idCurrent).fadeOut();
        $("#card_"+idLinked).fadeIn();
        
    },
    
    filterClickHandler: function (evt){
        
        var cat = $(evt.target).attr("data-cat");
        this.rendu(cat);
    },
    
    rendu:function(cat){
       $(".card").hide();
       $(".card").each(function(){
           if($(".card").attr("data-categorie")===cat){
               console.log($(".card").attr("data-categorie"));
               $(".card").show();
           }
       });
        
        console.log(cat);
    }
});