import React from "react";
import { Grid, List } from "semantic-ui-react";
import { Activity } from "../../../app/models/activity";

interface Props {
    activities: Activity[];
}

export default function ActivityDashboard({ activities }: Props) {
    return (
        <Grid>
            <Grid.Column width="10">
                {/* Unordered list that will contain the activities */}
                <List>
                    {/* Mapping over the "activities" state variable to generate list items */}
                    {activities.map(activity => (
                        // Each list item has a unique "key" prop and displays the activity title
                        <List.Item key={activity.id}>
                            {activity.title}
                        </List.Item>
                    ))}
                </List>
            </Grid.Column>
        </Grid>
    )
}