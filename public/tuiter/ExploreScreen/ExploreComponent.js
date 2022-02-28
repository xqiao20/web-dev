import PostSummaryList from "../PostSummaryList";
import NavigationTopbar from "../NavigationTopbar"
import SearchBar from "../SearchBar";
import TopicImage from "../TopicImage";

const ExploreComponent = () => {
    return(`
            <div class="row">
            ${SearchBar()}
                       <!-- search field and cog -->
           </div>
           <ul class="nav mb-2 nav-tabs mt-2">
           ${NavigationTopbar()}
                      <!-- tabs -->
           </ul>
           ${TopicImage()}
           <!-- image with overlaid text -->
           ${PostSummaryList()}
    `);
}
export default ExploreComponent;

