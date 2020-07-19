
var documents = [{
    "id": 0,
    "url": "http://localhost:4000/404.html",
    "title": "404",
    "body": "404 Page not found!Please use the search bar from the bottom left or visit our homepage! "
    }, {
    "id": 1,
    "url": "http://localhost:4000/about",
    "title": "About the author",
    "body": " Hi, I’m Mounish Pedagandham, a 21 year undergraduate in CS from National Institute of Technology, Raipur (2020). I love to travel, read books, and indulge in fitness. Also, a serious petrolhead. I am eager to share my experiences, journeys through short stories and my views &amp; opinions on various issues. Follow me on Instagram   "
    }, {
    "id": 2,
    "url": "http://localhost:4000/categories",
    "title": "Categories",
    "body": ""
    }, {
    "id": 3,
    "url": "http://localhost:4000/contact",
    "title": "Contact",
    "body": "  Please send your message to Memoirs by MP. I will reply as soon as possible!   "
    }, {
    "id": 4,
    "url": "http://localhost:4000/",
    "title": "Home",
    "body": "                                                                                              Is the ban on Chinese Apps sufficient to be Aatm Nirbhar?              :       Amidst the growing tensions between India and China on the military front, the government of India announced the ban of 59 mobile apps stating that they are ‘prejudicial to sovereignty,. . . :                                                                               Mounish                 01 Jul 2020                                "
    }, {
    "id": 5,
    "url": "http://localhost:4000/robots.txt",
    "title": "",
    "body": "      Sitemap: {{ “sitemap. xml”   absolute_url }}   "
    }, {
    "id": 6,
    "url": "http://localhost:4000/aatm-nirbhar/",
    "title": "Is the ban on Chinese Apps sufficient to be Aatm Nirbhar?",
    "body": "2020/07/01 - Amidst the growing tensions between India and China on the military front, the government of India announced the ban of 59 mobile apps stating that they are ‘prejudicial to sovereignty, integrity, defence of India, security of the state and public order’ invoking the power under Section 69A of the IT Act ( provisions of IT Rules 2009). What does Aatm Nirbhar mean? The Honourable Prime Minister Shri Narendra Modi, announced the special economic package on May 12 to uplift India’s economy desecrated by the national wide lockdown due to the ongoing pandemic caused by COVID — 19. The package aims to make India independent from foreign competition in global supply chain and empower the underprivileged affected by the lockdown. The phrase Aatm Nirbhar means to be self dependent, which can be collocated to the self sufficient production of goods. How does it resonate with the current context?     Photo by chuttersnap on Unsplash The present situation with China at the LAC possess a challenging situation for India. The loss of lives of 20 Indian soldiers during the clash between Indian Army and PLA at Galwan valley on June 15 sent an alarming manifestation of the arduous situation at the LAC. A delayed and ambiguous response had paved for ominous remarks, although later clarified it left a stifling unrest in the general public. To brush away the propaganda, a nationwide dissension against the use of Chinese products was brought forth. This ‘boycott Chinese products’ motto worked well in the likes of political executives. To further consolidate the outcry, an agenda for a self-reliant India free from the shackles of China has been bestowed. Thus, an Aatm Nirbhar India has to be accomplished sooner or later, essentially with respect to China. .  .  . Can India boycott China? The fact of India not continuing trade with China torments the former’s economy. China is one of the largest trading partners with India with an estimate of $16. 34 billion in exports and $68. 06 billion in imports for the FY17. The imports from China had considerably decreased by 15% from the FY18 due to anti-dumping duties, and the number stands at $65. 1 billion for FY20. However, the exports have gained a minuscule percentage and stand at $16. 6 billion for FY20. The dependence of Indian automobile, pharmaceutical industries on the raw materials, available at low cost, from China possess a problem to boycott the Chinese products. Over a quarter of India’s auto parts imports have come from China in 2019 amounting to $4. 2 billion. These are crucial parts in the manufacturing process, without which the development of costly alternatives aggravates the local business and profits, says the automobile manufacturing groups. “The imports from China directly contribute to over 30% of India’s aggregate trade deficit. ” says Suman Chowdhury, from Acuité Ratings &amp; Research. Thus, the dependence of domestic economy on the imports from China is quite significant. The report by S&amp;P Global Ratings on 26 June predicts that the Indian economy is in deep trouble, with difficulty in containing the virus, its growth is expected to fall by 5% this fiscal. With such a taxing scenario on the business front, India cannot immediately cut the trading ties with its Asian business partner. The ban of Chinese mobile apps, though a welcoming step, it serves a diminutive effect on the ongoing bilateral issues and the trade between the two nations. However, further steps are, and should be, under consideration. .  .  . A Feasible Foresight      The government is trying to stiffen the curbs on 1,173 non-essential imports, through dialogue with companies, mentions a trading body in India. Furthermore, the customs scrutiny of the exports at Chennai port has deliberately been intensified leading to delay in delivery of goods. This move had a contemplated repercussion on the Chinese side of exports to India, leading to delays, worrying the importing companies. However, the study by Acuité Research &amp; Rating shows that India can potentially reduce its trade deficit with China by $8. 4 billion over FY21–22, which is equivalent to 17. 3% of deficit with China and 0. 3% of India’s GDP, further leading to self reliance. This notion of boycott cannot be achieved overnight. It would hurt the Indians dependent on logistic supply chains, if a sudden boycott should be imposed. It takes a pragmatic approach and careful planning of foreign and trade policies not only with China, but also other trading partners i. e. the government should frame the policies aiming to reduce the dependence of the economy not only on Chinese products, but also other foreign products. The self reliability should be achieved in strategic financial sectors to be free from external market players. Thus, this pandemic proved that we have to be Aatm Nirbhar to sustain our pharma, automobile, agri, manufacturing industries. We, as people, have to be ‘vocal for local’ as endorsed by hon’ble Prime Minister. Hence, India should strive to stand up not only against China, but against all foreign competition to progress as a prosperous nation. .  .  . The information presented above is from various sources like Wikipedia, The Hindu. Please do subscribe to my newsletter, and leave a comment below. "
    }];

var idx = lunr(function () {
    this.ref('id')
    this.field('title')
    this.field('body')

    documents.forEach(function (doc) {
        this.add(doc)
    }, this)
});
function lunr_search(term) {
    document.getElementById('lunrsearchresults').innerHTML = '<ul></ul>';
    if(term) {
        document.getElementById('lunrsearchresults').innerHTML = "<p>Search results for '" + term + "'</p>" + document.getElementById('lunrsearchresults').innerHTML;
        //put results on the screen.
        var results = idx.search(term);
        if(results.length>0){
            //console.log(idx.search(term));
            //if results
            for (var i = 0; i < results.length; i++) {
                // more statements
                var ref = results[i]['ref'];
                var url = documents[ref]['url'];
                var title = documents[ref]['title'];
                var body = documents[ref]['body'].substring(0,160)+'...';
                document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML = document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML + "<li class='lunrsearchresult'><a href='" + url + "'><span class='title'>" + title + "</span><span class='body'>"+ body +"</span><span class='url'>"+ url +"</span></a></li>";
            }
        } else {
            document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML = "<li class='lunrsearchresult'>No results found...</li>";
        }
    }
    return false;
}

function lunr_search(term) {
    $('#lunrsearchresults').show( 400 );
    $( "body" ).addClass( "modal-open" );
    
    document.getElementById('lunrsearchresults').innerHTML = '<div id="resultsmodal" class="modal fade show d-block"  tabindex="-1" role="dialog" aria-labelledby="resultsmodal"> <div class="modal-dialog shadow" role="document"> <div class="modal-content"> <div class="modal-header" id="modtit"> <button type="button" class="close" id="btnx" data-dismiss="modal" aria-label="Close"> &times; </button> </div> <div class="modal-body"> <ul class="mb-0"> </ul>    </div> <div class="modal-footer"><button id="btnx" type="button" class="btn btn-primary btn-sm" data-dismiss="modal">Close</button></div></div> </div></div>';
    if(term) {
        document.getElementById('modtit').innerHTML = "<h5 class='modal-title'>Search results for '" + term + "'</h5>" + document.getElementById('modtit').innerHTML;
        //put results on the screen.
        var results = idx.search(term);
        if(results.length>0){
            //console.log(idx.search(term));
            //if results
            for (var i = 0; i < results.length; i++) {
                // more statements
                var ref = results[i]['ref'];
                var url = documents[ref]['url'];
                var title = documents[ref]['title'];
                var body = documents[ref]['body'].substring(0,160)+'...';
                document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML = document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML + "<li class='lunrsearchresult'><a href='" + url + "'><span class='title'>" + title + "</span><small><span class='body'>"+ body +"</span><span class='url'>"+ url +"</span></small></a></li>";
            }
        } else {
            document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML = "<li class='lunrsearchresult'>Sorry, no results found. Close & try a different search!</li>";
        }
    }
    return false;
}
    
$(function() {
    $("#lunrsearchresults").on('click', '#btnx', function () {
        $('#lunrsearchresults').hide( 5 );
        $( "body" ).removeClass( "modal-open" );
    });
});