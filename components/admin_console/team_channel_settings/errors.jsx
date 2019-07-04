// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.

import React from 'react';
import {FormattedMessage} from 'react-intl';

import * as PropTypes from 'prop-types';

import FormError from 'components/form_error';

import ToggleModalButton from 'components/toggle_modal_button.jsx';

import UsersToBeRemovedModal from './users_to_be_removed_modal';

export const NeedGroupsError = () => (
    <FormError
        error={(
            <FormattedMessage
                id='admin.team_channel_settings.need_groups'
                defaultMessage='You must add at least one group to manage this team by sync group members.'
            />)}
    />
);

export class UsersWillBeRemovedError extends React.PureComponent {
    static propTypes = {
        users: PropTypes.arrayOf(PropTypes.object).isRequired,
        total: PropTypes.number.isRequired,
    }

    render() {
        const {total, users} = this.props;
        return (
            <FormError
                iconClassName='fa-exclamation-triangle'
                textClassName='has-warning'
                error={(
                    <span>
                        <FormattedMessage
                            id='admin.team_channel_settings.users_will_be_removed'
                            defaultMessage='{amount} Users will be removed from this team. They are not in groups linked to this team.'
                            values={{amount: total}}
                        />
                        <ToggleModalButton
                            className='btn btn-link'
                            dialogType={UsersToBeRemovedModal}
                            dialogProps={{total, users}}
                        >
                            <FormattedMessage
                                id='admin.team_channel_settings.view_removed_users'
                                defaultMessage='View These Users'
                            />
                        </ToggleModalButton>
                    </span>
                )}
            />

        );
    }
}
