import caramelo from "../../resources/caramelo.jpg";
import {Component} from 'react'

class Users extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        window["alloy"]("sendEvent", {
            renderDecisions: true,
            xdm: {
                web: {
                    webPageDetails: {
                        viewName: "/users"
                    }
                },
                eventType: "view-change"
            }
        }).then(({decisions = []}) => {
            console.log("scope based decisions for users view", decisions);
        });

        return (
            <>
                <h2 id="heading-users">Users</h2>
                <a id="link-users" href="www.google.com">
                    Google
                </a>
                <img
                    id="image-users"
                    style={{display: "block"}}
                    alt="dog"
                    src={caramelo}
                />

                <div id="first-div-users">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                    posuere rutrum facilisis. Ut rutrum egestas purus, et mattis mauris
                    porta a. Pellentesque sit amet rutrum risus. Interdum et malesuada fames
                    ac ante ipsum primis in faucibus. Nulla sit amet bibendum mi. Nulla nec
                    neque feugiat, scelerisque est eget, hendrerit erat. Maecenas sodales
                    orci eget imperdiet aliquet. Sed ex quam, finibus eu pretium in,
                    consectetur eget orci. Nullam vitae venenatis nulla, eu efficitur dolor.
                    Morbi varius semper dolor, vel bibendum enim finibus volutpat.
                </div>
                <p id="first-paragraph-users">
                    Nunc consequat, turpis et blandit cursus, ligula sem volutpat ante, nec
                    convallis diam enim sit amet sem. Sed fringilla pharetra felis, in
                    lacinia metus mattis et. Vestibulum varius vestibulum mauris ut semper.
                    Curabitur a lobortis ligula. Praesent commodo suscipit dolor, at semper
                    enim vulputate aliquet. Duis consequat tortor nisi, efficitur aliquet
                    velit pretium at. Proin faucibus risus leo, at dapibus quam lacinia ac.
                </p>
                <p id="second-paragraph-users">
                    Maecenas ullamcorper nibh sed sodales porta. Quisque bibendum quam
                    vulputate congue finibus. Nam pulvinar vestibulum ex vitae lacinia.
                    Donec gravida augue mauris, eu bibendum massa condimentum sed. In a
                    facilisis metus, sit amet volutpat elit. Vestibulum nec pulvinar arcu.
                    Morbi semper, lectus sit amet posuere finibus, ante ipsum elementum
                    nisi, sit amet consequat purus nunc at lectus. Pellentesque interdum
                    consequat volutpat. Nunc vitae tincidunt erat. Nullam non varius lacus.
                    Sed porta non ligula eu pellentesque. Ut egestas ipsum vitae felis
                    varius, ut bibendum nisi dapibus. Praesent bibendum dignissim augue ut
                    tempus. Vivamus consectetur euismod ipsum, at finibus nisi blandit nec.
                </p>
            </>
        );
    }
}
export default Users
