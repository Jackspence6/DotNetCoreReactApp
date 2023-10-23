import { Grid } from "semantic-ui-react";
import ActivityList from "./ActivityList";
import { useStore } from "../../../app/stores/store";
import { observer } from "mobx-react-lite";
import { useEffect } from "react";
import LoadingComponent from "../../../app/layout/LoadingComponent";
import ActivityFilters from "./ActivityFilters";

export default observer(function ActivityDashboard() {
    const { activityStore } = useStore();
    const { loadActivities, activityRegistry } = activityStore;

    // Using the "useEffect" hook to execute a side-effect in my component
    useEffect(() => {
        if (activityRegistry.size <= 1) loadActivities();
        // Empty Array of dependencies 
    }, [activityRegistry.size, loadActivities])

    if (activityStore.loadingInitial)
        return <LoadingComponent content='Loading app...' />

    return (
        <Grid>
            <Grid.Column width="10">
                <ActivityList />
            </Grid.Column>
            <Grid.Column width="6">
                <ActivityFilters />
            </Grid.Column>
        </Grid>
    )
})