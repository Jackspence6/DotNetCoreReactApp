import { Grid } from "semantic-ui-react";
import ActivityList from "./ActivityList";
import { useStore } from "../../../app/stores/store";
import { observer } from "mobx-react-lite";
import { useEffect } from "react";
import LoadingComponent from "../../../app/layout/LoadingComponent";

export default observer(function ActivityDashboard() {
    const { activityStore } = useStore();

    // Using the "useEffect" hook to execute a side-effect in my component
    useEffect(() => {
        activityStore.loadActivities();
        // Empty Array of dependencies 
    }, [activityStore])

    if (activityStore.loadingInitial)
        return <LoadingComponent content='Loading app...' />

    return (
        <Grid>
            <Grid.Column width="10">
                <ActivityList />
            </Grid.Column>
            <Grid.Column width="6">
                <h2>Activity filters</h2>
            </Grid.Column>
        </Grid>
    )
})