
import { ChoisePlayer } from '../ChoisePlayer/ChoisePlayer';
import { Title } from './Title';
import { ModeSelect } from '../ModeSelect/ModeSelect';
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