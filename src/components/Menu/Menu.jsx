
import { ChoisePlayer } from './ChoisePlayer';
import { Title } from './Title';
import { ModeSelect } from './ModeSelect';
import { GameMenuLayout } from '../../layouts/GameMenuLayout';

export const Menu = () => {
	return (
		<GameMenuLayout>
			<Title/>
			<ChoisePlayer/>
			<ModeSelect/>
		</GameMenuLayout>
	)
}