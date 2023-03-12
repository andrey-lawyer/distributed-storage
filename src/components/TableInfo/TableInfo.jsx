import { AiFillStar, AiOutlineStar } from 'react-icons/ai';
import { toStars, toTypeVideo } from 'services/computedProperties';
import {
  TableItem,
  TableList,
  Element,
  Region,
  Latency,
  Time,
  Video,
  BlockData,
  Span,
  Title,
  TitleSpan,
  RegionName,
} from './TableInfo.Styled';

export const TableInfo = ({ dataForTable }) => {
  return (
    <>
      <Title>
        Byte Cloud<TitleSpan>Object Storage</TitleSpan>
      </Title>
      <TableList>
        {dataForTable.map(
          ({ latencyByteCloud, latencyObjectStorage, region }) => {
            const videoByteCloud = toTypeVideo(latencyByteCloud);
            const videoObjectStorage = toTypeVideo(latencyObjectStorage);
            const starsByteCloud = toStars(latencyByteCloud);
            const starsObjectStorage = toStars(latencyObjectStorage);
            return (
              <TableItem key={region}>
                <Element>
                  <Region>
                    <RegionName>{region}</RegionName>
                    <div>
                      {starsByteCloud > 4 ? (
                        <AiFillStar color="orange" size="20px" />
                      ) : (
                        <AiOutlineStar size="20px" />
                      )}
                      {starsByteCloud > 3 ? (
                        <AiFillStar color="orange" size="20px" />
                      ) : (
                        <AiOutlineStar size="20px" />
                      )}
                      {starsByteCloud > 2 ? (
                        <AiFillStar color="orange" size="20px" />
                      ) : (
                        <AiOutlineStar size="20px" />
                      )}
                      {starsByteCloud > 1 ? (
                        <AiFillStar color="orange" size="20px" />
                      ) : (
                        <AiOutlineStar size="20px" />
                      )}
                      <AiFillStar color="orange" size="20px" />
                    </div>
                  </Region>

                  <BlockData>
                    <Latency>
                      latency <Span>{latencyByteCloud}</Span>
                    </Latency>
                    <Time>
                      Download time<Span>{latencyByteCloud / 100} sec</Span>
                    </Time>
                    <Video>
                      Video streaming <Span>{videoByteCloud}</Span>
                    </Video>
                  </BlockData>
                </Element>
                <Element>
                  <Region>
                    <RegionName>{region}</RegionName>
                    <div>
                      {starsObjectStorage > 4 ? (
                        <AiFillStar color="orange" size="20px" />
                      ) : (
                        <AiOutlineStar size="20px" />
                      )}
                      {starsObjectStorage > 3 ? (
                        <AiFillStar color="orange" size="20px" />
                      ) : (
                        <AiOutlineStar size="20px" />
                      )}
                      {starsObjectStorage > 2 ? (
                        <AiFillStar color="orange" size="20px" />
                      ) : (
                        <AiOutlineStar size="20px" />
                      )}
                      {starsObjectStorage > 1 ? (
                        <AiFillStar color="orange" size="20px" />
                      ) : (
                        <AiOutlineStar size="20px" />
                      )}
                      <AiFillStar color="orange" size="20px" />
                    </div>
                  </Region>
                  <BlockData>
                    <Latency>
                      latency <Span>{latencyObjectStorage}</Span>
                    </Latency>
                    <Time>
                      Download time<Span>{latencyObjectStorage / 100} sec</Span>
                    </Time>
                    <Video>
                      Video streaming <Span>{videoObjectStorage}</Span>
                    </Video>
                  </BlockData>
                </Element>
              </TableItem>
            );
          }
        )}
      </TableList>
    </>
  );
};
