import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../states/app/hooks";
import { findAreas } from "../../states/features/areaSlice";
import { AreaCard } from "./components/areaCard/AreaCard";
import { Areas, Container } from "./styles";

export const TeamDashboard = () => {
  const { teamId } = useParams();
  const teamIdNumber = Number(teamId);

  const { value: areas, isLoading } = useAppSelector((state) => state.area);

  const dispatch = useAppDispatch();
  const listSize = areas.length;
  
  useEffect(() => {
      dispatch(findAreas(teamIdNumber));
  }, []);
  
  return (
    <Container>
      <Areas listSize={listSize}>
        {areas.map(area => <AreaCard key={area.id} area={area}/>)}
      </Areas>
    </Container>
  );
}