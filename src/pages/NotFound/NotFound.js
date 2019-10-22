import React, { Component } from 'react';

class NotFound extends Component {
    render() {
        return (
            <div>
                <div class="alert alert-danger">
                    <button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button>
                    <strong>Not Found</strong>
                </div>
            </div>
        );
    }
}

export default NotFound;