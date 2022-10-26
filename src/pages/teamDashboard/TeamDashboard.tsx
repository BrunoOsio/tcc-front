import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../states/app/hooks";
import { findAreas } from "../../states/features/areaSlice";
import { AreaCard } from "./components/areaCard/AreaCard";
import { Areas, Container } from "./styles";

export const TeamDashboard = () => {
  const tempTeamId = 1;
  const { value: areas, isLoading } = useAppSelector((state) => state.area);

  const dispatch = useAppDispatch();

  useEffect(() => {
      dispatch(findAreas());
  }, []);
  return (
    <Container>
      <Areas>
        {areas.map(area => <AreaCard key={area.id} area={area}/>)}
      </Areas>
    </Container>
  );
}